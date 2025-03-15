export interface WarRoomVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  channelTitle: string;
  tags?: string[];
  duration?: string;
  viewCount?: number;
  likeCount?: number;
}

export interface VideoSearchParams {
  query?: string;
  page: number;
  perPage: number;
  sortBy?: 'date' | 'views' | 'likes';
  tags?: string[];
} 