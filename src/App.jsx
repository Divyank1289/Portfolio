import Navbar from "./components/navbar"
import Home from "./components/Home"
import SocialLink from './components/SocialLink'
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <Skills/>
      <Contact />
      <SocialLink/>
    </div>
  )
}
export default App