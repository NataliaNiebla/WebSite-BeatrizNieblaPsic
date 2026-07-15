const SobreMi = () => {
  return (
    <section id="sobre-mi" className="w-full px-6 py-20 bg-white border-y border-linea-grid">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Columna de la Imagen */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Cuadro rosa decorativo de fondo */}
            <div className="absolute inset-0 bg-rosa-pastel rounded-3xl transform translate-x-4 translate-y-4 border-2 border-texto-carbon"></div>
            {/* Foto de Beatriz */}
            <img 
              src="/beatriz-perfil.png" 
              alt="Psicóloga Beatriz Niebla" 
              className="relative z-10 w-72 md:w-80 h-auto rounded-3xl border-2 border-texto-carbon object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Columna de Texto */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-serif text-texto-carbon mb-6 font-bold">
            Hola, soy Beatriz.
          </h2>
          <div className="font-sans text-gray-700 space-y-5 text-lg leading-relaxed">
            <p>
              Soy la Psicóloga Beatriz Adriana Niebla Rodríguez. Soy Licenciada en Psicología y actualmente curso la Maestría en Psicoterapia en la Universidad Juárez del Estado de Durango. Durante mi trayectoria, me he especializado en la psicoterapia infantil-juvenil, la prevención de comportamientos adictivos y el abordaje de trastornos de la conducta alimentaria.
            </p>
            <p>
              Creo firmemente en el activismo corporal y el bienestar emocional. En mi consulta y en talleres como MIND&BODY, busco que mis pacientes construyan una relación saludable consigo mismos, basada en el respeto y la compasión, reconociendo que nuestro valor personal va mucho más allá de la imagen física.
            </p>
          </div>
          <button className="mt-8 bg-transparent text-texto-carbon font-sans font-bold text-lg px-6 py-3 rounded-full border-2 border-texto-carbon hover:bg-rosa-pastel transition-colors duration-300">
            Conoce más sobre mi enfoque
          </button>
        </div>

      </div>
    </section>
  )
}

export default SobreMi