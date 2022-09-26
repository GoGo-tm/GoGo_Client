import type { Difficulty } from './base';

interface HikingLogDto {
  id: number;
  hikingTrailName: string;
  hikingTrailImageUrl: string;
  hikingDate: string;
  starRating: 0;
  difficulty: Difficulty;
  address: string;
  length: number;
}

interface HikingLogDetailDto {
  starRating: 0;
  address: string;
  difficulty: Difficulty;
  length: number;
  hikingDate: string;
  hikingLogImageUrls: string[];
  memo: string;
}

export type { HikingLogDetailDto, HikingLogDto };
