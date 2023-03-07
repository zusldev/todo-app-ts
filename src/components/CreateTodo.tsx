// Importamos el tipo de datos TodoTitle y la función useState desde los módulos correspondientes
import { type TodoTitle } from '../types'
import { useState } from 'react'

// Definimos una interfaz Props que indica que la prop saveTodo es una función que recibe un objeto TodoTitle y no devuelve nada (void)
interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

// Definimos un componente funcional llamado CreateTodo que recibe las props de tipo Props y no devuelve nada (void)
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  // Definimos el estado del componente utilizando la función useState. Inicializamos el valor del input con una cadena vacía
  const [inputValue, setInputValue] = useState('')

  // Definimos una función llamada handleSubmit que recibe un evento de tipo React.FormEvent<HTMLFormElement> y no devuelve nada (void)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // Prevenimos el comportamiento por defecto del formulario
    event.preventDefault()
    // Verificamos que el valor del input no esté vacío
    if (inputValue.trim().length > 0) {
      // Llamamos a la función saveTodo pasándole un objeto con el título de la tarea
      saveTodo({
        title: inputValue
      })
      // Reiniciamos el valor del input
      setInputValue('')
    }
  }

  // Definimos una función llamada handleChange que recibe un evento de tipo React.ChangeEvent<HTMLInputElement> y no devuelve nada (void)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // Extraemos el valor del input del evento
    const { value } = event.currentTarget
    // Actualizamos el estado del componente con el valor del input
    setInputValue(value)
  }

  // El componente devuelve un formulario con un input que permite al usuario ingresar el título de la tarea.
  // El valor del input está vinculado al estado del componente (inputValue)
  // El método onSubmit del formulario está vinculado a la función handleSubmit
  // El método onChange del input está vinculado a la función handleChange
  return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                value={inputValue}
                placeholder="¿Qué necesitas hacer?"
                autoFocus
                onChange={handleChange}
                onKeyDown={() => { }}

            />
        </form>
  )
}
