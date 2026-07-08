import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SobreMi from './components/SobreMi.jsx'
import Servicios from './components/Servicios.jsx'
import FAQ from './components/FAQ.jsx'
import Contacto from './components/Contacto.jsx' 
import Footer from './components/Footer.jsx'     

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20"> 
        <Hero />
        <SobreMi />
        <Servicios />
        <FAQ />
        <Contacto /> 
      </main>
      
      <Footer /> 
    </div>
  )
}

export default App