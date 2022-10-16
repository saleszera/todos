import React from 'react';
import { TodosProvider } from './hooks/Todos';
import Todos from './pages/Todos';

import './globalStyles.css'

const App: React.FC = () => {
  return (
    <TodosProvider>
      <Todos/>
    </TodosProvider>
  );
}

export default App;