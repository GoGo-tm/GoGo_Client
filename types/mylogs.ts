import type { Difficulty } from './base';

interface HikingLogDto {
  id: number;
  hikingTrailName: string;
  hikingTrailImageUrl: string;
  imageUrls: string[];
  hikingDate: string;
  starRating: 0;
  difficulty: Difficulty;
  address: string;
  length: number;
}

interface HikingLogDetailDto {
  hikingTrailName: string;
  starRating: number;
  address: string;
  difficulty: Difficulty;
  length: number;
  hikingDate: string;
  hikingLogImageUrls: string[];
  memo: string;
}

interface YouTubeVideo {
  id: number;
  link: string;
  channelName: string;
  description: string;
  contact: string;
  theme: string;
}

interface YouTubeDto {
  youtubes: YouTubeVideo[];
  hasNext: boolean;
}

export type { HikingLogDetailDto, HikingLogDto, YouTubeDto };
