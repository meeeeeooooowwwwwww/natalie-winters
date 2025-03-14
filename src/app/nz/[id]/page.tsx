import { Business } from '@/app/types/business';

// Function to load business data
async function loadBusinessData(): Promise<Business[]> {
  try {
    // In Node.js environment during build, we need to use require
    return require('../../../../public/nz-listings.json');
  } catch (error) {
    console.error('Error loading business data:', error);
    return [];
  }
}

// Generate static params for all business pages
export async function generateStaticParams() {
  const businesses = await loadBusinessData();
  return businesses.map((business) => ({
    id: business.key,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const businesses = await loadBusinessData();
  const business = businesses.find(b => b.key === params.id);
  
  if (!business) {
    return {
      title: 'Business Not Found',
      description: 'The requested business could not be found.'
    };
  }

  return {
    title: business.value.title,
    description: business.value.description !== "Currently Unavailable" 
      ? business.value.description 
      : `Details for ${business.value.title}`
  };
}

export default async function BusinessPage({ params }: { params: { id: string } }) {
  const businesses = await loadBusinessData();
  const business = businesses.find(b => b.key === params.id);

  if (!business) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-8">
            <p className="text-xl mb-4">Business not found</p>
            <a href="/" className="text-pink-400 hover:text-pink-300">
              ← Back to Search
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-pink-400 hover:text-pink-300 inline-block mb-8">
          ← Back to Search
        </a>
        
        <div className="bg-white/5 rounded-lg p-8 border border-pink-400/20">
          <h1 className="text-3xl font-bold mb-6">{business.value.title}</h1>
          
          <div className="space-y-4">
            {business.value.address !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Address</h2>
                <p className="text-gray-300">{business.value.address}</p>
              </div>
            )}

            {business.value.phone !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Phone</h2>
                <p className="text-gray-300">📞 {business.value.phone}</p>
              </div>
            )}

            {business.value.email !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Email</h2>
                <a 
                  href={`mailto:${business.value.email}`}
                  className="text-pink-400 hover:text-pink-300"
                >
                  ✉️ {business.value.email}
                </a>
              </div>
            )}

            {business.value.website !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Website</h2>
                <a
                  href={business.value.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300"
                >
                  🌐 Visit Website
                </a>
              </div>
            )}

            {business.value.description !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-300">{business.value.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 