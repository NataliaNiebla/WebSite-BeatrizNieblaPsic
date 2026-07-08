const Hero = () => {
  return (
    <section className="relative w-full px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center">
      
      {/* Etiqueta flotante (Sticker) */}
      <div className="bg-rosa-pastel text-texto-carbon text-sm font-semibold px-5 py-2 rounded-full mb-8 transform -rotate-3 border-2 border-texto-carbon shadow-[3px_3px_0px_rgba(26,26,26,1)]">
        Mi cuerpo vino a bailar, a reír
      </div>

      {/* Título Principal */}
      <h1 className="text-5xl md:text-7xl font-serif text-texto-carbon max-w-4xl leading-tight mb-6">
        Tu cuerpo, tu mente y tus emociones merecen un{' '}
        <span className="relative inline-block px-2">
          <span className="relative z-10">espacio seguro.</span>
          {/* Subrayado verde salvia detrás del texto */}
          <span className="absolute bottom-2 left-0 w-full h-4 bg-verde-salvia -z-10 transform -rotate-1"></span>
        </span>
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-xl font-sans text-gray-700 max-w-2xl mb-10 leading-relaxed">
        Acompañamiento psicológico y psicoterapia compasiva para jóvenes y adultos. 
        Un lugar para sanar tu relación contigo mismo, sin juicios y desde el respeto.
      </p>

      {/* Botón Principal */}
      <button className="bg-texto-carbon text-fondo-principal font-sans font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-800 transition-all border-2 border-texto-carbon shadow-[4px_4px_0px_rgba(255,209,220,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(255,209,220,1)]">
        Agenda tu primera sesión
      </button>

    </section>
  )
}

export default Hero