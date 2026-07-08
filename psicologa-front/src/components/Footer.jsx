const Footer = () => {
  return (
    <footer className="w-full bg-texto-carbon py-8 text-center border-t-4 border-verde-salvia">
      <p className="font-sans text-fondo-principal/80 text-sm">
        © {new Date().getFullYear()} Psic. Beatriz Niebla Rodríguez. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer