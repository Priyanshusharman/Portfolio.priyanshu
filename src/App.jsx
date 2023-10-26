import { BrowserRouter } from "react-router-dom"
import { Navbar,Hero,About,Contact,Experience,Feedbacks,Tech,Works,StarsCanvas } from "./components"
const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
      </div>
      <div className="relative z-o">
        <Contact/>
        <StarsCanvas/>
      </div>

    </BrowserRouter>
  )
}

export default App


