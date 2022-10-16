import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { useTodos } from '../../hooks/Todos';

import FormProvider from '../FormProvider';
import Input from '../Input';

import './styles.css'

interface IFormAttributes {
  todo: string
}

const Form = () => {
  const {onAddTodo} = useTodos()

  const formSchema = Yup.object().shape({
    todo: Yup.string()
  })

  const methods = useForm<IFormAttributes>({
    resolver: yupResolver(formSchema)
  })

  const {handleSubmit, formState: {isSubmitSuccessful}, reset} = methods

  useEffect(() => {
    reset({todo: ''})
  }, [isSubmitSuccessful])

  const handleSubmitTodo = useCallback(({todo: name}: IFormAttributes) => {
    onAddTodo({name, isFinished: false})
  }, [onAddTodo])


  return (
    <header>
      <FormProvider methods={methods} onSubmit={handleSubmit(handleSubmitTodo)}>
        <Input name="todo" />
      </FormProvider>
    </header>
  );
}

export default Form;