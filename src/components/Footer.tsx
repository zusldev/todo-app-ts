// Importamos la interfaz FilterValue y el componente Filters desde sus respectivos archivos
import { type FilterValue } from '../types'
import { Filters } from './Filters'

// Definimos la interfaz Props que define las propiedades del componente Footer
interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

// Declaramos el componente Footer que recibe las props definidas en la interfaz Props
export const Footer: React.FC<Props> = ({
  onClearCompleted,
  completedCount = 0,
  activeCount = 0,
  handleFilterChange,
  filterSelected
}) => {
  return (
    // Definimos la estructura del componente usando JSX
    <footer className='footer'>
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {
        // Si hay tareas completadas, se muestra un botón para borrarlas
        completedCount > 0 && (
          <button
            className="clear-completed"
            onClick={onClearCompleted}
          >
            Borrar completadas
          </button>
        )
      }
    </footer>
  )
}
