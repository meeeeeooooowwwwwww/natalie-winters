import { WarRoomVideo, VideoSearchParams } from '../types/video';
import videoData from '../data/warroom-videos.json';

export async function searchVideos(params: VideoSearchParams): Promise<{
  videos: WarRoomVideo[];
  total: number;
}> {
  const { query, page, perPage, sortBy, tags } = params;
  
  // Get videos from JSON file
  const videos: WarRoomVideo[] = videoData.videos;
  
  // Filter videos based on search query and tags
  let filteredVideos = videos;
  
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredVideos = filteredVideos.filter(video => 
      video.title.toLowerCase().includes(searchQuery) ||
      video.description.toLowerCase().includes(searchQuery) ||
      video.tags?.some(tag => tag.toLowerCase().includes(searchQuery))
    );
  }
  
  if (tags && tags.length > 0) {
    filteredVideos = filteredVideos.filter(video =>
      tags.some(tag => video.tags?.includes(tag))
    );
  }
  
  // Sort videos
  if (sortBy) {
    filteredVideos.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case 'views':
          return (b.viewCount || 0) - (a.viewCount || 0);
        case 'likes':
          return (b.likeCount || 0) - (a.likeCount || 0);
        default:
          return 0;
      }
    });
  }
  
  // Calculate pagination
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);
  
  return {
    videos: paginatedVideos,
    total: filteredVideos.length
  };
} 