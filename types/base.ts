import type { NextPage } from 'next/types';
import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout<T> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type Difficulty = 'EASY' | 'NORMAL' | 'HARD';

interface ServerResponseResults<T> {
  contents: T[];
  hasNext: boolean;
}

export type { Difficulty, NextPageWithLayout, ServerResponseResults };
