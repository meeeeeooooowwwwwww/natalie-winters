export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden relative bg-black">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/6vcyNOGbYz8?autoplay=1&mute=1&controls=0&loop=1&playlist=6vcyNOGbYz8"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '100vh',
            border: 'none',
          }}
        />
      </div>
      <div className="absolute bottom-8 left-8 z-10">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          NZ Business Listings
        </h1>
        <p className="text-white text-xl mt-2 drop-shadow-lg">
          Coming Soon
        </p>
      </div>
    </main>
  )
} 