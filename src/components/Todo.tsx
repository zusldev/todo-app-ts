// Importa los tipos necesarios para esta componente desde el archivo 'types'.
import { type Todo as TodoType, type TodoId } from '../types'

// Define la interfaz de Props para la componente 'Todo'.
interface Props extends TodoType {
  // Define la función 'onToggleCompleteTodo' que tomará un objeto con 'id' y 'completed'.
  onToggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  // Define la función 'onRemoveTodo' que tomará un objeto con 'id'.
  onRemoveTodo: ({ id }: TodoId) => void
}

// Define la componente 'Todo'.
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
  // Define la función 'handleChangeCheckBox' que maneja el evento de cambio de estado de completado de la tarea.
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Llama a la función 'onToggleCompleteTodo' y le pasa un objeto con la 'id' de la tarea y su estado de completado.
    onToggleCompleteTodo({
      id,
      completed: event.target.checked
    })
  }

  // Renderiza la tarea en la lista de tareas.
  return (
    <div className='view'>
      {/* Renderiza un cuadro de verificación que indica si la tarea está completa o no. */}
      <input
        className='toggle'
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckBox}
      />
      {/* Renderiza el título de la tarea. */}
      <label>{title}</label>
      {/* Renderiza un botón de eliminación de la tarea. */}
      <button
        className='destroy'
        onClick={() => {
          // Llama a la función 'onRemoveTodo' y le pasa un objeto con la 'id' de la tarea que se está eliminando.
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
