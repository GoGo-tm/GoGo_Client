import type { Difficulty } from './base';

interface HikingTrailDto {
  id: number;
  imageUrl: null | string;
  name: string;
  address: string;
  favoriteCount: number;
  difficulty: Difficulty;
  length: number;
  uptime: number;
  downtime: number;
  base64: string;
}

export type { HikingTrailDto };
