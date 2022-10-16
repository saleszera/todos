import React from 'react';
import { useTodos } from '../../hooks/Todos';
import Button from '../Button';

import './styles.css'

interface IFilters {
  type: FilterProps
  title: 'Todos' | 'Pendentes' | 'Concluidos'
}

const filters: IFilters[] = [
  {title: 'Todos', type: 'all'},
  {title: 'Pendentes', type: 'pending'},
  {title: 'Concluidos', type: 'concluded'},
]

const Footer: React.FC = () => {
  const {filter, setFilter} = useTodos()

  return (
    <footer>
      {filters.map(({title, type}) => <Button title={title} isActive={type === filter} onClick={() => setFilter(type)}/>)}
    </footer>
  );
}

export default Footer;