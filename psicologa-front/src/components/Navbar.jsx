const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-fondo-principal/80 backdrop-blur-md z-50 border-b border-linea-grid">
      <div className="w-full px-4 md:px-8 py-4 flex justify-between items-center">
        
        {/* Logotipo / Nombre */}
        <div className="font-serif font-bold text-xl md:text-2xl text-texto-carbon cursor-pointer">
          Psic. Beatriz Niebla
        </div>
        
        {/* Enlaces */}
        <div className="hidden md:flex gap-10 font-sans text-base font-semibold text-gray-700">
          <a href="#inicio" className="hover:text-rosa-pastel transition-colors">Inicio</a>
          <a href="#sobre-mi" className="hover:text-rosa-pastel transition-colors">Sobre Mí</a>
          <a href="#servicios" className="hover:text-rosa-pastel transition-colors">Servicios</a>
          <a href="#faq" className="hover:text-rosa-pastel transition-colors">FAQ</a>
          <a href="#contacto" className="hover:text-rosa-pastel transition-colors">Contacto</a>
        </div>

        {/* Botón de Contacto */}
        <button className="bg-verde-salvia text-texto-carbon font-sans font-bold text-sm md:text-base px-6 py-2.5 rounded-full border-2 border-texto-carbon shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[0px_0px_0px_rgba(26,26,26,1)] transition-all">
          Contacto
        </button>

      </div>
    </nav>
  )
}

export default Navbar