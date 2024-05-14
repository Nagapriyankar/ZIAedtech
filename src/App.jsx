import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Services from './components/services/Services'
import Course from './components/courses/Course'
import About from './components/about/About'
import Placement from './components/placements/Placement'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Course />
      <Placement />
    </div>
  )
}

export default App
