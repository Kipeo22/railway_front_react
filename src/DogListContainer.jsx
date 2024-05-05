// @ts-check

import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import { data } from 'browserslist'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher')
  const [dogImageList, setDogImageList] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      setBreeds(Object.keys(data.message))
      fetchImages('affenpinscher')
    }

    fetchBreeds()
  }, [])

  const handleChange = breed => {
    setSelectedBreed(breed)
  }

  const showImages = async () => {
    if (selectedBreed) {
      const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`
      const response = await fetch(url)
      const data = await response.json()
      setDogImageList(data.message)
    }
  }

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        value={selectedBreed}
        onChange={handleChange}
      />
      <button onClick={showImages}>表示</button>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: 0,
          listStyleType: 'none',
        }}
      >
        {dogImageList.map((image, index) => (
          <li key={index} style={{ margin: '10px' }}>
            <img src={image} alt="Dog" style={{ width: '150px' }} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default DogListContainer
