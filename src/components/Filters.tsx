import { FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void // función que se ejecutará cuando el filtro cambie
  filterSelected: FilterValue // valor actualmente seleccionado del filtro
}

export const Filters: React.FC<Props> = (
  { filterSelected, onFilterChange } // se desestructuran las props que recibe el componente
) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => { // iterar sobre las entradas del objeto de botones de filtro
          const isSelectected = key === filterSelected // determinar si el botón actual está seleccionado
          const className = isSelectected ? 'selected' : '' // agregar la clase 'selected' si está seleccionado

          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault() // evitar que se recargue la página al hacer clic en el enlace
                  onFilterChange(key as FilterValue) // llamar a la función onFilterChange y pasar el valor del filtro seleccionado
                }}
              >
                {literal} {/* mostrar el texto del botón */}
              </a>
            </li>
          )
        })
      }

    </ul>
  )
}
