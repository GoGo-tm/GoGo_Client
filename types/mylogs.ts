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

export type { HikingLogDetailDto, HikingLogDto };
