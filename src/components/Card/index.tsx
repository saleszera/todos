import { Check, Trash } from 'phosphor-react';
import React from 'react';
import { useTodos } from '../../hooks/Todos';

import './styles.css'

const Card: React.FC<ITodo> = ({isFinished, name}) => {
  const {onDeleteTodo, toggleTodoProgress} = useTodos()

  return (
    <li className="card" onDoubleClick={() => toggleTodoProgress(name)}>
      <div className={`content ${isFinished && 'concluded'}`}>
        <Check />
        <p>{name}</p>
      </div>

      <button onClick={() => onDeleteTodo(name)}>
        <Trash />
      </button>
    </li>
  );
}

export default Card;