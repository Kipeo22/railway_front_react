import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import { data } from 'browserslist'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')

  const handleChange = selectedBreed => {
    setSelectedBreed(selectedBreed)
  }

  useEffect(() => {
    async function DogList() {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      // console.log(data.message)
      // setBreeds(data.message)
      const breedsList = data.message
      setBreeds(Object.keys(breedsList))
    }
    DogList()
  }, []) //第二引数が空のとき、初回のみ実行

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        value={selectedBreed}
        onChange={handleChange}
      />
    </>
  )
}

export default DogListContainer
