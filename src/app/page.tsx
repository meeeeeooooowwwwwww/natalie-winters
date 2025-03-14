export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">New Zealand Business Listings</h1>
      <div className="grid gap-4">
        {/* Business listings will be populated here */}
        <p className="text-gray-600">Loading business listings...</p>
      </div>
    </main>
  )
} 