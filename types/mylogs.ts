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

export type { HikingLogDto };
