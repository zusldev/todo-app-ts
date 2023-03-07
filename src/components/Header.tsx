import { type TodoTitle } from '../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  // Define una prop llamada onAddTodo que es una función que toma un objeto con una propiedad 'title' de tipo TodoTitle y no devuelve nada (void)
  onAddTodo: ({ title }: TodoTitle) => void
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
        <header className="header">
            <h1>todos</h1>

            {/* Renderiza el componente CreateTodo y le pasa como prop la función onAddTodo */}
            <CreateTodo saveTodo={onAddTodo} />

        </header>

  )
}
