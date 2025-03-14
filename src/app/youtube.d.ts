interface YT {
  Player: {
    new (elementId: string, config: {
      videoId: string;
      playerVars?: {
        autoplay?: number;
        mute?: number;
        controls?: number;
        loop?: number;
        playlist?: string;
        modestbranding?: number;
        showinfo?: number;
        rel?: number;
      };
      events?: {
        onReady?: (event: any) => void;
        onStateChange?: (event: { data: number }) => void;
      };
    }): any;
  };
}

interface Window {
  YT: YT;
  onYouTubeIframeAPIReady: () => void;
} 