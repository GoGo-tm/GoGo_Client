import type { Difficulty } from './base';

interface HikingTrailDto {
  id: number;
  imageUrl: null | string;
  name: string;
  address: string;
  favoriteCount: number;
  difficulty: Difficulty;
  length: number;
}

export type { HikingTrailDto };
