import { ChangeEvent, useCallback, useState } from 'react';

export default function useInput<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChangeValues = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setValues((prevValues) => ({
        ...prevValues,
        [e.target.name]: e.target.value,
      })),
    [values]
  );

  return { values, handleChangeValues };
}
