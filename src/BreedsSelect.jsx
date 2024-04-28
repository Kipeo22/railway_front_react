// import { useState } from 'react'

// export const BreedsSelect = props => {
//   let onChange = props.onChange
//   const options = props.breeds.map(option => (
//     <option value={option} key={option}>
//       {option}
//     </option>
//   ))

//   return (
//     <div>
//       <form action="">
//         <select name="breed" onChange={e => onChange(e.target.props.value)}>
//           {options}
//         </select>
//         <button type="submit">表示</button>
//       </form>
//     </div>
//   )
// }

// export default BreedsSelect

import React from 'react'

export const BreedsSelect = props => {
  const { breeds, value, onChange, onShowImages } = props

  const options = breeds.map(option => (
    <option value={option} key={option}>
      {option}
    </option>
  ))

  const handleShowImages = e => {
    e.preventDefault()
    onShowImages()
  }

  return (
    <div>
      <form onSubmit={handleShowImages}>
        {' '}
        {/* formタグでsubmitイベントをキャッチ */}
        <select
          name="breed"
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          {options}
        </select>
        <button type="submit">表示</button> {/* 追加 */}
      </form>
    </div>
  )
}

export default BreedsSelect
