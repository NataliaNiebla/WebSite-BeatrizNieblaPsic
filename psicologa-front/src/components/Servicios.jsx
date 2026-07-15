import { useState, useEffect } from 'react'

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
      colorFondo: "bg-white" 
    },
    {
      titulo: "Psicología Deportiva",
      subtitulo: "y Dinámica Familiar",
      descripcion: "Talleres y sesiones enfocadas en fortalecer la cohesión, comunicación y seguridad emocional entre padres e hijos, aplicando mi experiencia en el desarrollo integral dentro y fuera de la cancha.",
      colorFondo: "bg-verde-salvia"
    }
  ];

  // ==========================================
  // LÓGICA DEL CARRUSEL
  // ==========================================
  const imagenesConsultorio = [
    '/imgs_consultorio/c_1.jpeg',
    '/imgs_consultorio/c_2.jpeg',
    '/imgs_consultorio/c_3.jpeg',
    '/imgs_consultorio/c_4.jpeg'
  ];

  const [imagenActual, setImagenActual] = useState(0);

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev === imagenesConsultorio.length - 1 ? 0 : prev + 1));
  };

  const anteriorImagen = () => {
    setImagenActual((prev) => (prev === 0 ? imagenesConsultorio.length - 1 : prev - 1));
  };

  // Reproducción automática cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(siguienteImagen, 4000);
    return () => clearInterval(intervalo);
  }, []);

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

        {/* Contenedor de las Tarjetas de Servicio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 text-left mb-24">
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

        {/* ==========================================
            NUEVA SECCIÓN: CARRUSEL DEL CONSULTORIO
            ========================================== */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-left md:text-center">
            <h3 className="text-3xl font-serif font-bold text-texto-carbon mb-2">
              Conoce tu espacio seguro
            </h3>
            <p className="font-sans text-gray-700 text-lg">
              Un ambiente cálido y confidencial pensado para tu tranquilidad.
            </p>
          </div>

          {/* Contenedor principal del Carrusel */}
          <div className="relative w-full aspect-video md:aspect-[21/9] bg-verde-salvia border-2 border-texto-carbon rounded-[2rem] overflow-hidden shadow-[8px_8px_0px_rgba(26,26,26,1)] group">
            
            {/* Imágenes con transición Fade */}
            {imagenesConsultorio.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Consultorio Psicológico ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === imagenActual ? 'opacity-100 relative z-10' : 'opacity-0 z-0'}`}
              />
            ))}

            {/* Controles del Carrusel (Flechas) */}
            <div className="absolute inset-0 flex items-center justify-between p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={anteriorImagen}
                className="bg-white text-texto-carbon w-10 h-10 rounded-full flex items-center justify-center border-2 border-texto-carbon shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[0px_0px_0px_rgba(26,26,26,1)] transition-all font-bold text-xl"
              >
                ←
              </button>
              <button 
                onClick={siguienteImagen}
                className="bg-white text-texto-carbon w-10 h-10 rounded-full flex items-center justify-center border-2 border-texto-carbon shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[0px_0px_0px_rgba(26,26,26,1)] transition-all font-bold text-xl"
              >
                →
              </button>
            </div>

            {/* Indicadores (Puntitos abajo) */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {imagenesConsultorio.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImagenActual(index)}
                  className={`w-3 h-3 rounded-full border border-texto-carbon transition-all ${index === imagenActual ? 'bg-rosa-pastel scale-125' : 'bg-white/70 hover:bg-white'}`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Servicios