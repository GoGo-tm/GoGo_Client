interface HikingTrails {
  id: number;
  imageUrl: null | string;
  name: string;
  address: string;
  favoriteCount: number;
  difficulty: 'EASY' | 'NORMAL' | 'HARD';
  length: number;
}

interface ResponseHikingTrails {
  contents: HikingTrails[];
  hasNext: boolean;
}

export type { HikingTrails, ResponseHikingTrails };
