import { type TODO_FILTERS, FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue

}
export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    const handleClick = (filter: FilterValue) {
        
    }
  return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                  const isSelectec = key === filterSelected
                  const className = isSelectec ? 'selected' : ''
                  return (
                        <li key={key}>
                            <a
                            href={href}
                            className={className}
                            onClick={(event) => {
                                event.preventDefault()
                                onFilterChange(key as FilterValue)
                            }}
                            />
                        </li>
                  )
                })
            }

        </ul>
  )
}
