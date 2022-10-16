import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import './styles.css'

interface IInput {
  name: string;
}

const Input: React.FC<IInput> = ({name}) => {
  const {control} = useFormContext()

  return (
    <Controller name={name} control={control} render={({field}) => (
      <div className='input'>
        <input {...field} type="text" placeholder='to-do' />
        <button type="submit">Salvar</button>
      </div>      
    )}/>
  );
}

export default Input;