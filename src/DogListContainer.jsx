// @ts-check
import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import { data } from 'browserslist'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState([])

  useEffect(() => {
    async function DogList() {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      // console.log(data.message)
      setBreeds(data.message)
    }
    DogList()
  }, []) //第二引数が空のとき、初回のみ実行

  return (
    <>
      <BreedsSelect breeds={breeds} />
    </>
  )
}

export default DogListContainer
