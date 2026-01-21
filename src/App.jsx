import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Banner/>
    </div>
  )
}

export default App
