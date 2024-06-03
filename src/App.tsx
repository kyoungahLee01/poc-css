import { Global } from '@emotion/react'
import './App.css'

import { globalStyles } from './styles/globalStyles'
import Onsite from './view/Onsite'

function App() {
  return (
    <>
      <Onsite />
      <Global styles={globalStyles} />
    </>
  )
}

export default App
