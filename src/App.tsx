import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type FilterValue, type TodoTitle } from './types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: true
  },
  {
    id: '2',
    title: 'todo 1',
    completed: false
  },
  {
    id: '3',
    title: 'todo 1',
    completed: false
  }

]

// Definimos un componente llamado App que retorna un elemento JSX
function App (): JSX.Element {
  // Definimos un estado para la lista de tareas, inicializado con los valores de la variable mockTodos
  const [todos, setTodos] = useState(mockTodos)
  // Definimos un estado para el filtro de búsqueda, inicializado con el valor TODO_FILTERS.ALL
  const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL)

  // Definimos una función llamada handleRemove que recibe un objeto de tipo TodoId y no devuelve nada (void)
  const handleRemove = ({ id }: TodoId): void => {
    // Creamos una nueva lista de tareas filtrando aquellas cuyo id no coincide con el id recibido como argumento
    const newTodos = todos.filter(todo => todo.id !== id)
    // Actualizamos el estado de la lista de tareas utilizando la función setTodos, pasándole la nueva lista filtrada
    setTodos(newTodos)
  }

  // Función que maneja el estado de completitud de una tarea
  const handleCompleted = (
    // Se utiliza la función "Pick" para obtener las propiedades "id" y "completed" del tipo "TodoType"
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    // Se crea una copia del array de tareas "todos" y se utiliza la función "map" para iterar sobre cada tarea
    const newTodos = todos.map(todo => {
      // Si el ID de la tarea actual coincide con el ID de la tarea que se quiere marcar como completada, se actualiza su estado
      if (todo.id === id) {
        // Se devuelve un objeto con todas las propiedades de la tarea actual, pero actualizando la propiedad "completed" con el nuevo valor
        return {
          ...todo,
          completed
        }
      }
      // Si el ID de la tarea actual no coincide con el ID de la tarea que se quiere marcar como completada, se devuelve la tarea sin cambios
      return todo
    })
    // Se actualiza el estado del array de tareas "todos" con la nueva copia que incluye la tarea marcada como completada
    setTodos(newTodos)
  }

  // Definimos una función llamada handleFilterChange que recibe un argumento de tipo FilterValue y no devuelve nada (void)
  const handleFilterChange = (filter: FilterValue): void => {
    // Imprimimos en consola el valor del filtro recibido como argumento
    console.log(filter)
    // Actualizamos el estado del filtro utilizando la función setFilter, pasándole el valor del filtro recibido como argumento
    setFilter(filter)
  }

  // Definimos una función llamada handleClearCompleted que no recibe argumentos y no devuelve nada (void)
  const handleClearCompleted = (): void => {
    // Creamos una nueva lista de tareas filtrando aquellas que no están completas
    const newTodos = todos.filter(todo => !todo.completed)
    // Actualizamos el estado de la lista de tareas utilizando la función setTodos, pasándole la nueva lista filtrada
    setTodos(newTodos)
  }

  // Contamos cuántas tareas están activas y cuántas completadas
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  // Filtramos las tareas según el filtro seleccionado
  const filteredTodos = todos.filter(todo => {
    if (filter === TODO_FILTERS.ACTIVE) {
      // Si el filtro es "Activas", devolvemos las tareas no completadas
      return !todo.completed
    }
    if (filter === TODO_FILTERS.COMPLETED) {
      // Si el filtro es "Completadas", devolvemos las tareas completadas
      return todo.completed
    }
    // Si no hay filtro seleccionado, devolvemos todas las tareas
    return todo
  })

  // La función handleAddTodo acepta un objeto TodoTitle como parámetro.
  const handleAddTodo = ({ title }: TodoTitle): void => {
    // Se crea una nueva tarea con el título proporcionado, un id único generado por criptografía y un estado de completado inicialmente establecido en falso.
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    // Se utiliza la función setTodos para actualizar la lista de tareas existente.
    // Se agrega la nueva tarea a la lista existente mediante la propagación de la lista original y la adición de la nueva tarea al final de la lista.
    setTodos([...todos, newTodo])
  }

  // Renderiza una div que envuelve toda la aplicación de la lista de tareas.
  return (
    <div className="todoapp">

      {/* Renderiza el encabezado de la aplicación que permite al usuario agregar nuevas tareas. */}
      <Header onAddTodo={handleAddTodo} />

      {/* Renderiza la lista de tareas existentes. */}
      {/* Permite al usuario marcar tareas como completadas y eliminar tareas existentes. */}
      {/* La lista de tareas se filtra en función del estado de filtrado seleccionado por el usuario. */}
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />

      {/* Renderiza el pie de página de la aplicación que proporciona estadísticas sobre las tareas existentes y permite al usuario cambiar el estado de filtrado de la lista de tareas. */}
      {/* También proporciona un botón para eliminar todas las tareas completadas. */}
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filter}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />

    </div>
  )
}

export default App
