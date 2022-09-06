import { useCallback, useEffect, useState, useTransition } from 'react';

interface UseFormProps<T> {
  serviceCallback: (values: T) => Promise<any>;
}

export default function useForm<T>({ serviceCallback }: UseFormProps<T>) {
  const [formData, setFormData] = useState<T>();
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (values: T) => {
      setFormData(values);
      startTransition(() => {
        serviceCallback(values)
          .then(() => setSuccess(true))
          .catch(() => setError(true));
      });
    },
    [serviceCallback]
  );

  useEffect(() => {
    return () => {
      setSuccess(false);
      setError(false);
    };
  }, []);

  return { formData, success, error, handleSubmit, isPending };
}
