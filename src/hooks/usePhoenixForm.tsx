import { ChangeEvent, FormEvent, useState } from 'react';

const usePhoenixForm = <T,>(defaultValues?: Partial<T>) => {
  const [formData, setFormData] = useState<T>({
    ...(defaultValues || {})
  } as T);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: ['checkbox', 'radio'].includes(e.target.type)
        ? e.target.checked
        : e.target.value
    });
  };

  const setValue = (values: Partial<T>) => {
    setFormData({
      ...formData,
      ...values
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ formData });
  };
  return { formData, setFormData, setValue, onChange, onSubmit };
};

export default usePhoenixForm;
