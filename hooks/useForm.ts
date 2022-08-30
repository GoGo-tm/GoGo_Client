import { useCallback, useEffect, useState } from 'react';

interface UseFormProps<T> {
  serviceCallback: (values: T) => Promise<any>;
}

export default function useForm<T>({ serviceCallback }: UseFormProps<T>) {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = useCallback((values: T) => {
    serviceCallback(values)
      .then(() => setSuccess(true))
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    return () => {
      setSuccess(false);
      setError(false);
    };
  }, []);

  return { success, error, handleSubmit };
}
