import { useState } from 'react'

const FAQ = () => {
  // Lista de preguntas y respuestas
  const listaFaqs = [
    {
      pregunta: "¿En qué consiste la primera sesión?",
      respuesta: "Es una sesión de conocimiento y evaluación. Hablaremos sobre los motivos que te traen a terapia, tus objetivos y cómo podemos trabajar en equipo para alcanzarlos. Sobre todo, es un espacio para que te sientas en confianza."
    },
    {
      pregunta: "¿Atiendes de forma presencial o en línea?",
      respuesta: "Ofrezco ambas modalidades. Si te encuentras en Durango, México, podemos vernos en el consultorio. Si prefieres la comodidad de tu hogar o estás en otra ciudad, las sesiones online son igualmente efectivas."
    },
    {
      pregunta: "¿A quiénes van dirigidas tus sesiones?",
      respuesta: "Trabajo principalmente con jóvenes y adultos, abordando desde crisis emocionales hasta el fortalecimiento del autoconocimiento."
    }
  ]

  // Estado para saber qué pregunta está abierta (guardamos el índice)
  const [preguntaAbierta, setPreguntaAbierta] = useState(null)

  // Función para abrir/cerrar
  const toggleFaq = (index) => {
    if (preguntaAbierta === index) {
      setPreguntaAbierta(null) // Si ya está abierta, la cerramos
    } else {
      setPreguntaAbierta(index) // Si está cerrada, la abrimos
    }
  }

  return (
    <section id="FAQ" className="w-full px-6 py-24 bg-white border-t border-linea-grid">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-texto-carbon mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg font-sans text-gray-700">
            Resolver tus dudas es el primer paso para sentirte en confianza.
          </p>
        </div>

        {/* Contenedor del Acordeón */}
        <div className="space-y-4">
          {listaFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-2 border-texto-carbon rounded-2xl overflow-hidden shadow-[4px_4px_0px_rgba(26,26,26,1)] transition-all duration-300 bg-fondo-principal"
            >
              {/* Botón de la Pregunta */}
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent focus:outline-none hover:bg-rosa-pastel/30 transition-colors"
              >
                <span className="font-sans font-bold text-lg text-texto-carbon pr-4">
                  {faq.pregunta}
                </span>
                <span className="text-2xl font-serif text-texto-carbon font-bold transition-transform duration-300 transform" style={{ transform: preguntaAbierta === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>

              {/* Respuesta (Se oculta o muestra dependiendo del estado) */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${preguntaAbierta === index ? 'max-h-48 border-t-2 border-texto-carbon/10' : 'max-h-0'}`}
              >
                <p className="px-6 py-5 font-sans text-gray-700 leading-relaxed bg-white">
                  {faq.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ