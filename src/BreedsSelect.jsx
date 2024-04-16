import { useState } from 'react'

export const BreedsSelect = props => {
  let onChange = props.onChange
  const options = props.breeds.map(option => (
    <option value={option} key={option}>
      {option}
    </option>
  ))

  return (
    <div>
      <select name="breed" onChange={e => onChange(e.target.props.value)}>
        {options}
      </select>
    </div>
  )
}

export default BreedsSelect
