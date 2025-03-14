'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: '6vcyNOGbYz8',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          loop: 1,
          playlist: '6vcyNOGbYz8',
        },
        events: {
          onReady: (event: any) => {
            // Player is ready
            console.log('Player ready');
          },
        },
      });
    };
  }, []);

  const toggleSound = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="h-screen w-screen overflow-hidden relative bg-black">
      <div className="absolute inset-0 w-full h-full p-8">
        <div 
          className="relative w-full h-full border-8 border-pink-400 rounded-lg overflow-hidden"
          style={{
            borderWidth: '8px',
            borderStyle: 'solid',
            borderColor: '#F472B6'
          }}
        >
          <div
            id="youtube-player"
            className="w-full h-full"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      <button 
        onClick={toggleSound}
        className="absolute top-12 right-12 z-10 cursor-pointer"
      >
        <div 
          className="pulse-animation bg-pink-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2"
          style={{ backgroundColor: '#F472B6' }}
        >
          {isMuted ? '🔇 Sound Off' : '🔊 Sound On'}
        </div>
      </button>
      <div className="absolute bottom-16 left-16 z-10">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">
          NZ Business Listings
        </h1>
        <p className="text-white text-xl mt-2 drop-shadow-lg">
          Coming Soon
        </p>
      </div>
    </main>
  );
} 