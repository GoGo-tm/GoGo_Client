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
  if (difficulty === 'EASY') return '쉬움';
  if (difficulty === 'NORMAL') return '보통';
  return '어려움';
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
