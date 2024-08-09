import { useState } from 'react'
import './App.css'
import Header from "./Header/Header.jsx"
import Main from "./Main/Main.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className="container">
        <Main></Main>
      </div>
    </>
  )
}

export default App
