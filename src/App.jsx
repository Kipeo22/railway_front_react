// DO NOT DELETE

import { data } from 'browserslist'
import './App.css'
import React, { useEffect, useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
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
      <header>DOGアプリ</header>
      <div className="content-box">
        <p>犬の画像を表示するサイト</p>
        <div className="imgbox">
          <img src={dogUrl} />
        </div>
      </div>
      {/* onClickでrandomDog関数を呼ぶ */}
      <button onClick={randomDog} className="button">
        更新
      </button>
    </div>
  )
}
