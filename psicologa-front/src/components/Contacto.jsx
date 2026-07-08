import { useState } from 'react'

const Contacto = () => {
  // Estado para guardar lo que el usuario escribe
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  })
  
  // Estado para mostrar el mensaje de éxito
  const [enviado, setEnviado] = useState(false)

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Función para simular el envío
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Datos listos para enviar al backend:", formData)
    setEnviado(true)
    // Reiniciamos el formulario después de 3 segundos
    setTimeout(() => {
      setEnviado(false)
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' })
    }, 3000)
  }

  return (
    <section id="contacto" className="w-full px-6 py-24 bg-rosa-pastel/20 border-t border-linea-grid">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Columna Izquierda: Información */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-texto-carbon mb-6">
            Da el primer paso hacia tu bienestar.
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-10 leading-relaxed">
            Si tienes dudas sobre el proceso o quieres agendar una sesión, escríbeme. Estoy aquí para escucharte.
          </p>

          <div className="space-y-6 font-sans text-lg text-texto-carbon">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📞</span>
              <span className="font-semibold">618 171 8732</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">✉️</span>
              <span className="font-semibold">beatriz.nro@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📸</span>
              <span className="font-semibold">@psic.beatriznblaa</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl">📍</span>
              <span className="font-semibold">Durango, Dgo., México</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-8 rounded-3xl border-2 border-texto-carbon shadow-[6px_6px_0px_rgba(26,26,26,1)]">
            
            {enviado ? (
              <div className="text-center py-20">
                <span className="text-5xl block mb-4">✨</span>
                <h3 className="text-2xl font-serif font-bold text-texto-carbon mb-2">¡Mensaje enviado!</h3>
                <p className="font-sans text-gray-600">Me pondré en contacto contigo muy pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block font-sans font-bold text-sm text-texto-carbon mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-fondo-principal border-2 border-linea-grid rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-texto-carbon transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full">
                    <label className="block font-sans font-bold text-sm text-texto-carbon mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      className="w-full bg-fondo-principal border-2 border-linea-grid rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-texto-carbon transition-colors"
                      placeholder="hola@correo.com"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block font-sans font-bold text-sm text-texto-carbon mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full bg-fondo-principal border-2 border-linea-grid rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-texto-carbon transition-colors"
                      placeholder="(618) 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans font-bold text-sm text-texto-carbon mb-2">¿En qué te puedo ayudar hoy?</label>
                  <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-fondo-principal border-2 border-linea-grid rounded-xl px-4 py-3 font-sans focus:outline-none focus:border-texto-carbon transition-colors resize-none"
                    placeholder="Escribe un breve mensaje..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-2 bg-texto-carbon text-fondo-principal font-sans font-bold text-lg px-8 py-4 rounded-xl border-2 border-texto-carbon shadow-[4px_4px_0px_rgba(193,225,193,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[0px_0px_0px_rgba(193,225,193,1)] transition-all"
                >
                  Enviar mensaje
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contacto