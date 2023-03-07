import { type Todo as TodoType, type TodoId, type ListOfTodos } from '../types' // Importa los tipos de datos necesarios desde un archivo de tipos definidos en otra ubicación
import { Todo } from './Todo' // Importa el componente "Todo" definido en otro archivo

interface Props { // Define la interfaz para las propiedades que se esperan en el componente "Todos"
  todos: ListOfTodos // Un arreglo de objetos "Todo"
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void // Una función para actualizar el estado de un objeto "Todo" cuando se marca como completo
  onRemoveTodo: ({ id }: TodoId) => void // Una función para eliminar un objeto "Todo"
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => { // Define el componente "Todos" como una función de React que recibe las propiedades definidas en la interfaz Props
  return ( // Devuelve un elemento JSX que contiene una lista "ul" y utiliza la función "map" para iterar sobre cada objeto "Todo" y renderizarlo en un elemento "li"
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id} // Propiedad única para cada elemento "Todo"
            id={todo.id} // ID del elemento "Todo"
            title={todo.title} // Título del elemento "Todo"
            completed={todo.completed} // Estado de completado del elemento "Todo"
            onToggleCompleteTodo={onToggleCompleteTodo} // Función para actualizar el estado de completado de un elemento "Todo"
            onRemoveTodo={onRemoveTodo} // Función para eliminar un elemento "Todo"
          />
        </li>
      ))}
    </ul>
  )
}
