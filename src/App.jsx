// DO NOT DELETE

import { data } from 'browserslist'
import './App.css'
import Header from './Header'
import Description from './Description'
import DogListContainer from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <DogListContainer />
      <Description />
    </div>
  )
}
