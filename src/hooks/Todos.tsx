import React, {createContext, useCallback, useContext, useMemo, useState} from 'react'

type FilterProps = 'pending' | 'concluded' | 'all'

interface ITodosContext {
  filter: FilterProps
  setFilter: React.Dispatch<React.SetStateAction<FilterProps>>
  list: ITodo[]
  onAddTodo: (newTodo: ITodo) => void
  onDeleteTodo: (todo: string) => void
  toggleTodoProgress: (todo: string) => void
}

interface ITodosProvider {
  children: React.ReactNode
}

const TodosContext = createContext<ITodosContext>({} as ITodosContext)

export const TodosProvider: React.FC<ITodosProvider> = ({children}) => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [filter, setFilter] = useState<FilterProps>('all')

  const list = useMemo(() => {
    const handler = {
      pending: todos.filter(({isFinished}) => !isFinished),
      concluded: todos.filter(({isFinished})=> isFinished),
      all: todos
    }

    return handler[filter]
  }, [filter, todos])

  const onAddTodo = useCallback((newTodo: ITodo) => {
    const checkIsAlreadyExists = todos.some(({name}) => name === newTodo.name)

    if(!checkIsAlreadyExists){
      setTodos([...todos, newTodo])
    }
  }, [todos])

  const onDeleteTodo = useCallback((todo: string) => setTodos(oldState => oldState.filter(({name}) => name !== todo)),[])
  const toggleTodoProgress = useCallback((todo: string) => setTodos(oldState => oldState.map(item => item.name === todo ? {...item, isFinished: !item.isFinished} : item)), [])

  return (
    <TodosContext.Provider value={{filter, setFilter, list, onAddTodo, onDeleteTodo, toggleTodoProgress}}>
      {children}
    </TodosContext.Provider>
  )
}

export const useTodos = () => {
  const context = useContext(TodosContext)

  if(!context) {
    throw new Error('TodosContext must be used with TodosProvider')
  }

  return context
}