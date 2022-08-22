import { PropsWithChildren, useCallback } from 'react';

interface UseFormProps<T> extends PropsWithChildren {
  serviceCallback: () => Promise<T>;
  values: T;
}

export default function useForm<T>({
  serviceCallback,
  values,
}: UseFormProps<T>) {
  const hanldeSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {},
    [values]
  );
}
