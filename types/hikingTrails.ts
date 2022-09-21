import type { Difficulty, ServerResponseResults } from './base';

interface HikingTrailDto {
  id: number;
  imageUrl: null | string;
  name: string;
  address: string;
  favoriteCount: number;
  difficulty: Difficulty;
  length: number;
}

type HikingTrailResponseResults = ServerResponseResults<HikingTrailDto>;

export type { HikingTrailDto, HikingTrailResponseResults };
