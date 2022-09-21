import type { Difficulty, ServerResponseResults } from './base';

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

type HikingLogResponseResults = ServerResponseResults<HikingLogDto>;

export type { HikingLogDto, HikingLogResponseResults };
