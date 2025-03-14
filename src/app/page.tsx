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
          controls: 0,
          loop: 1,
          playlist: '6vcyNOGbYz8',
          modestbranding: 1,
          showinfo: 0,
          rel: 0
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
      <div className="absolute inset-0 w-full h-full p-2">
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
            className="absolute inset-0 w-full h-full"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              overflow: 'hidden'
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center w-full pb-8">
        <h1 className="glitch-text text-white text-6xl font-bold drop-shadow-lg text-center w-full px-4">
          Coming Soon
        </h1>
        <button 
          onClick={toggleSound}
          className="cursor-pointer mt-8"
        >
          <div 
            className="pulse-animation bg-pink-400 text-white px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2"
            style={{ backgroundColor: '#F472B6' }}
          >
            {isMuted ? '🔊 Sound On' : '🔇 Sound Off'}
          </div>
        </button>
      </div>
    </main>
  );
} 