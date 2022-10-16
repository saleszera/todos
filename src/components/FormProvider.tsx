import React from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form'

interface IFormProvider {
  children: React.ReactNode
  methods: UseFormReturn<any>
  onSubmit?: VoidFunction
}

const FormProvider: React.FC<IFormProvider> = ({children, methods, onSubmit}) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}

export default FormProvider;