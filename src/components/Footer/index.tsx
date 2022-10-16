import React from 'react';
import { useTodos } from '../../hooks/Todos';

import './styles.css'

const Footer: React.FC = () => {
  const {filter, setFilter} = useTodos()

  return (
    <footer>
      <button 
        type='button' 
        className={`filter ${filter === 'all' && 'active'}`}
        onClick={() => setFilter('all')}
      >
        Todos
      </button>

      <button 
        type='button' 
        className={`filter ${filter === 'pending' && 'active'}`}
        onClick={() => setFilter('pending')}
      >
        Pendentes
      </button>

      <button 
        type='button' 
        className={`filter ${filter === 'concluded' && 'active'}`}
        onClick={() => setFilter('concluded')}
      >
        Concluidos
      </button>
    </footer>
  );
}

export default Footer;