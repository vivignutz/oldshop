import { useState } from 'react'
import logo from '../assets/static/logo.png'
import Header from './Header';
import Footer from './Footer';
import '../App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div>
        <a href="https://redi-school.org" target="_blank" rel="noreferrer">
          <img src={logo} className="logo" alt="shop logo" />
        </a>
      </div>

      <h1>Oldshop - Your shop for vintage stuffs!</h1>
      <p>Under construction</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <Footer />
    </>
  )
}

export default App
