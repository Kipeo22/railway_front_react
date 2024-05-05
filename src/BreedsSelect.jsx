// @ts-check

import { useState } from 'react'

export const BreedsSelect = ({ breeds, value, onChange }) => {
  return (
    <div>
      <select
        name="breed"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {breeds.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default BreedsSelect
