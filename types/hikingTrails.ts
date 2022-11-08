import type { Difficulty } from './base';

interface HikingTrailDto {
  id: number;
  imageUrl: null | string;
  name: string;
  address: string;
  favoriteCount: number;
  geometries: { latitude: number; longitude: number }[];
  difficulty: Difficulty;
  length: number;
  uptime: number;
  downtime: number;
}

export type { HikingTrailDto };
