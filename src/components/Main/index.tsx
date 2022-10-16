import { Check, Trash } from 'phosphor-react';
import React from 'react';
import { useTodos } from '../../hooks/Todos';
import Card from '../Card';

import './styles.css'

const Main: React.FC = () => {
  const {list} = useTodos()

  return (
  <main>       
    <ul>
      {list.map(({isFinished, name}) => (
        <Card key={name} name={name} isFinished={isFinished}/>
      ))}
    </ul>        
  </main>
  );
}

export default Main;