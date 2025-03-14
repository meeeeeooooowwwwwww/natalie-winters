import { Business } from '@/app/types/business';
import BusinessDetails from '@/app/components/BusinessDetails';
import fs from 'fs';
import path from 'path';

// Function to load business data
async function loadBusinessData(): Promise<Business[]> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/data/nz-listings.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
  } catch (error) {
    console.error('Error loading business data:', error);
    return [];
  }
}

// Set dynamic rendering for this route
export const dynamic = 'force-dynamic';

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

  return <BusinessDetails business={business} />;
} 