import Outer from './components/Outer'
import HowWorks from './components/HowWorks'
import './App.css'
import Launchs from './components/Launchs'
import StartSelling from './components/StartSelling'
import Footer from './components/Footer'

function App() {

  return (
    <div className=' bg-customBlue text-white'>
      <Outer />
      <HowWorks />
      <Launchs />
      <StartSelling />
      <Footer />
    </div>
  )
}

export default App
