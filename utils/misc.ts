type ErrorWithMessage = {
  message: string;
};

interface Queries {
  [key: string]: number | string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}

const misc = {
  env: (key: string): string => {
    const value = process.env[key];

    if (!value) {
      throw new Error(`Missing: process.env['${key}'].`);
    }

    return value;
  },
  getErrorMessage,
  makeQueries: (queries: Queries) => {
    return Object.entries(queries)
      .map(([key, value], idx) => {
        if (idx === 0) return `?${key}=${value}`;
        return `&${key}=${value}`;
      })
      .join('');
  },
};

export default misc;
