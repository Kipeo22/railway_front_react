// @ts-check
import React, { useEffect, useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  //[set(state名), stateの更新用関数] = useState(初期値)
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/borzoi/n02090622_7947.jpg',
  )

  // const randomDog = async () => {
  //   const data = await fetch('https://dog.ceo/api/breeds/image/random')
  //   const dogImg = await data.json()

  //   //ここでsetDogUrlをする
  //   setDogUrl(dogImg.message)
  // }

  async function randomDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')

    const data = await response.json()

    setDogUrl(data.message)
  }
  return (
    <div>
      <div className="content-box">
        <p>更新を押すと写真が変わるよ！</p>
        <DogImage imageUrl={dogUrl} />
      </div>
      {/* onClickでrandomDog関数を呼ぶ */}
      <button onClick={randomDog} className="button">
        更新
      </button>
    </div>
  )
}

export default Description
