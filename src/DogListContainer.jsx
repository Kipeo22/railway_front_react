import React, { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import { data } from 'browserslist'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [urls, setUrls] = useState([])

  const handleChange = selectedBreed => {
    setSelectedBreed(selectedBreed)
  }

  const fetchImages = async () => {
    if (selectedBreed) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`,
        )
        const data = await response.json()
        setUrls(data.message)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }
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
        onShowImages={fetchImages}
      />
      <div>
        {urls.length > 0 && (
          <div>
            <h2>{selectedBreed}の画像リスト</h2>
            <ul>
              {urls.map((url, index) => (
                <li key={index}>
                  <img src={url} alt={`Dog ${index + 1}`} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default DogListContainer
