import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Services from './Components/Services';
import Footer from './Components/Footer';
import AboutSection from './Components/AboutSection';
import Technology from './Components/Technologies';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Banner/>
    <Services/>
    <AboutSection/>
    <Technology/>
    <Footer/>
    </div>
  )
}

export default App
