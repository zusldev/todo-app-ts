import { type TODO_FILTERS } from './consts'

// Interfaz que define la estructura de un objeto de tarea (Todo)
export interface Todo {
  id: string // Identificador único de la tarea
  title: string // Título de la tarea
  completed: boolean // Indica si la tarea está completada (true) o no (false)
}

// Tipo que se utiliza para especificar un objeto que contiene sólo el id de una tarea
export type TodoId = Pick<Todo, 'id'>

// Tipo que se utiliza para especificar un objeto que contiene sólo el título de una tarea
export type TodoTitle = Pick<Todo, 'title'>

// Tipo que se utiliza para especificar un objeto que contiene sólo el estado de completitud de una tarea
export type TodoCompleted = Pick<Todo, 'completed'>

// Tipo que se utiliza para especificar una lista de tareas
export type ListOfTodos = Todo[]

// Tipo que se utiliza para especificar un valor de filtro de tarea, que debe ser uno de los valores definidos en el objeto TODO_FILTERS
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
