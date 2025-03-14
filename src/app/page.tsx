'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { videoIds } from './data/videoIds';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);
  const [currentVideoId, setCurrentVideoId] = useState(() => {
    // Select a random video ID when the component mounts
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    return videoIds[randomIndex];
  });
  const [playedVideos, setPlayedVideos] = useState<string[]>([]);

  const playNextVideo = useCallback(() => {
    // Get available videos (ones that haven't been played yet)
    const availableVideos = videoIds.filter(id => !playedVideos.includes(id));
    
    // If all videos have been played, reset the played list
    if (availableVideos.length === 0) {
      setPlayedVideos([]);
      const randomIndex = Math.floor(Math.random() * videoIds.length);
      setCurrentVideoId(videoIds[randomIndex]);
      return;
    }

    // Select a random video from available videos
    const randomIndex = Math.floor(Math.random() * availableVideos.length);
    const nextVideoId = availableVideos[randomIndex];
    
    // Update state
    setCurrentVideoId(nextVideoId);
    setPlayedVideos(prev => [...prev, nextVideoId]);
  }, [playedVideos]);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: currentVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 0, // Disable looping
          modestbranding: 1,
          showinfo: 0,
          rel: 0
        },
        events: {
          onReady: (event: any) => {
            console.log('Player ready');
          },
          onStateChange: (event: any) => {
            // When video ends (state = 0), play next video
            if (event.data === 0) {
              playNextVideo();
            }
          }
        },
      });
    };
  }, [currentVideoId, playNextVideo]);

  // Update video when currentVideoId changes
  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById) {
      playerRef.current.loadVideoById(currentVideoId);
    }
  }, [currentVideoId]);

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
      <div className="absolute inset-0 w-full h-[calc(100%-140px)] md:h-[calc(100%-100px)] lg:h-full p-2">
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
      <div className="absolute bottom-[80px] md:bottom-[20px] lg:bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center w-full lg:pb-8 pb-0">
        <h1 className="glitch-text text-white text-6xl font-bold drop-shadow-lg text-center w-full px-4">
          Coming Soon
        </h1>
        <button 
          onClick={toggleSound}
          className="cursor-pointer lg:mt-8 mt-4"
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