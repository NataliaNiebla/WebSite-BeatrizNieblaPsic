const Servicios = () => {
  const listaServicios = [
    {
      titulo: "Psicoterapia Individual",
      subtitulo: "(Jóvenes y Adultos)",
      descripcion: "Acompañamiento para transitar la ansiedad, depresión, malestar psicosocial y prevención de conductas de riesgo (autolesión). Un espacio confidencial para recuperar tu seguridad emocional.",
      colorFondo: "bg-rosa-pastel"
    },
    {
      titulo: "TCA e Imagen Corporal",
      subtitulo: "(Trastornos de la Conducta Alimentaria)",
      descripcion: "Intervención y apoyo terapéutico para sanar tu relación con la comida y tu cuerpo. Fomentamos la autoaceptación como forma de resistencia ante los estándares sociales.",
      colorFondo: "bg-white" // Fondo blanco para crear contraste visual entre las tarjetas
    },
    {
      titulo: "Psicología Deportiva",
      subtitulo: "y Dinámica Familiar",
      descripcion: "Talleres y sesiones enfocadas en fortalecer la cohesión, comunicación y seguridad emocional entre padres e hijos, aplicando mi experiencia en el desarrollo integral dentro y fuera de la cancha.",
      colorFondo: "bg-verde-salvia"
    }
  ];

  return (
    <section id="servicios" className="w-full px-6 py-24 bg-fondo-principal">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Encabezado de la sección */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-texto-carbon mb-4">
          ¿Cómo puedo ayudarte?
        </h2>
        <p className="text-lg md:text-xl font-sans text-gray-700 mb-16 max-w-2xl mx-auto">
          Espacios diseñados para acompañarte en tu proceso, respetando tus ritmos y necesidades.
        </p>

        {/* Contenedor de las Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 text-left">
          {listaServicios.map((servicio, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl border-2 border-texto-carbon shadow-[6px_6px_0px_rgba(26,26,26,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(26,26,26,1)] transition-all duration-300 flex flex-col h-full ${servicio.colorFondo}`}
            >
              <h3 className="text-2xl font-serif font-bold text-texto-carbon mb-1">
                {servicio.titulo}
              </h3>
              <span className="text-sm font-sans font-bold text-gray-800/70 mb-5 block">
                {servicio.subtitulo}
              </span>
              <p className="font-sans text-texto-carbon leading-relaxed flex-grow">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Servicios