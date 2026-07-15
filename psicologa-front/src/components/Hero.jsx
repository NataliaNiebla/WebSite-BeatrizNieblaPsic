const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative w-full px-6 py-16 md:py-20 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto gap-12 md:gap-8"
    >
      {/* COLUMNA IZQUIERDA: Textos y Botón */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
        {/* Etiqueta flotante (Sticker) */}
        <div className="bg-rosa-pastel text-texto-carbon text-sm font-semibold px-5 py-2 rounded-full mb-8 transform -rotate-3 border-2 border-texto-carbon shadow-[3px_3px_0px_rgba(26,26,26,1)] self-center md:self-start">
          Mi cuerpo vino a bailar, a reír
        </div>

        {/* Título Principal */}
        <h1 className="text-xl md:text-xl lg:text-5xl font-serif text-texto-carbon leading-tight mb-6">
          Tu cuerpo, tu mente y tus emociones merecen un{" "}
          <span className="relative inline-block px-2 mt-2 md:mt-0">
            <span className="relative z-10">espacio seguro.</span>
            {/* Subrayado verde salvia detrás del texto */}
            <span className="absolute bottom-2 left-0 w-full h-4 bg-verde-salvia -z-10 transform -rotate-1"></span>
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl font-sans text-gray-700 max-w-xl mb-10 leading-relaxed">
          Acompañamiento psicológico y psicoterapia compasiva para jóvenes y
          adultos. Un lugar para sanar tu relación contigo mismo, sin juicios y
          desde el respeto.
        </p>

        {/* Botón Principal */}
        <button className="self-center bg-texto-carbon text-fondo-principal font-sans font-bold text-lg px-8 py-4 rounded-full border-2 border-texto-carbon transition-all duration-300 ease-out shadow-[6px_6px_0px_rgba(255,209,220,1)] hover:bg-gray-800 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0px_rgba(255,209,220,1)] active:translate-y-[6px] active:translate-x-[6px] active:shadow-none">
          Agenda tu primera sesión
        </button>
      </div>

      {/* COLUMNA DERECHA: Foto e Info de Beatriz */}
      <div className="w-full md:w-1/2 flex justify-center relative mt-12 md:mt-0">
        {/* Contenedor de la foto con estilo brutalista-suave */}
        <div className="relative w-72 md:w-80 lg:w-[400px] aspect-[4/5] rounded-[2rem] border-2 border-texto-carbon shadow-[8px_8px_0px_rgba(26,26,26,1)] bg-verde-salvia overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
          {/* FOTO: Reemplaza este src con la foto real de Beatriz */}
          <img
            src="/beatriz-perfil.png"
            alt="Psicóloga Beatriz Niebla"
            className="w-full h-full object-cover"
          />

          {/* Tarjeta de información superpuesta */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-5 py-4 rounded-xl border-2 border-texto-carbon shadow-[4px_4px_0px_rgba(193,225,193,1)]">
            <h3 className="font-serif font-bold text-texto-carbon text-xl mb-1">
              Psic. Beatriz Niebla
            </h3>
            <a
              href="https://instagram.com/tu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 bg-rosa-pastel text-texto-carbon font-sans font-bold text-xs sm:text-sm px-4 py-2 rounded-full border-2 border-texto-carbon shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all w-fit"
            >
              Sígueme en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;