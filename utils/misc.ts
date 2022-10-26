import { Difficulty } from '~/types/base';

type ErrorWithMessage = {
  message: string;
};

interface Queries {
  [key: string]: number | string;
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

const toErrorWithMessage = (maybeError: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

export const getLevel = (difficulty: Difficulty) => {
  switch (difficulty) {
    case 'EASY':
      return '쉬움';
    case 'NORMAL':
      return '보통';
    case 'HARD':
      return '어려움';
    default:
      return '측정중';
  }
};

export const getMeter = (meter: number) => {
  if (meter / 1000) {
    const km = Math.round(meter / 1000);
    const m = Math.round((meter % 1000) / 100);
    return `${km}.${m}km`;
  }
  return `${meter % 1000}m`;
};

export const getErrorMessage = (error: unknown) =>
  toErrorWithMessage(error).message;

export const env = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing: process.env['${key}'].`);
  }

  return value;
};

export const makeQueries = (queries: Queries) => {
  return Object.entries(queries)
    .map(([key, value], idx) => {
      if (idx === 0) return `?${key}=${value}`;
      return `&${key}=${value}`;
    })
    .join('');
};
