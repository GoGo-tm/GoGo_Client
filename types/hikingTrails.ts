import type { Difficulty } from './base';

interface HikingTrailDto {
  id: number;
  imageUrl: string;
  name: string;
  address: string;
  favoriteCount: number;
  geometries: { latitude: number; longitude: number }[];
  difficulty: Difficulty;
  length: number;
  uptime: number;
  base64: string;
  downtime: number;
}

export type { HikingTrailDto };
