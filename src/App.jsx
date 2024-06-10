import Outer from './components/Outer'
import HowWorks from './components/HowWorks'
import './App.css'
import Launchs from './components/Launchs'
import StartSelling from './components/StartSelling'
import Footer from './components/Footer'
import MaxWidthWrapper from './components/MaxWidthWrapper'

function App() {

  return (
    <div className=' bg-customBlue text-white'>
      <MaxWidthWrapper>
        <Outer />
        <HowWorks />
        <Launchs />
        <StartSelling />
      </MaxWidthWrapper>
      <Footer />
    </div>
  )
}

export default App
