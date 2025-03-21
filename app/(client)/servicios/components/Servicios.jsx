import Link from 'next/link';

export default function Servicios({ servicios }) {
  return (
    <section className="p-4 max-w-6xl m-auto md:py-16">
      {/* Título principal */}
      <h3 className="font-bold text-4xl text-center mb-12 text-[#f1b647] font-title relative">
        Nuestros Servicios
        <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-[#FF037F] transform -translate-x-1/2 rounded-full"></span>
      </h3>

      {/* Contenedor de los servicios */}
      <div className="flex flex-wrap justify-center gap-8">
        {servicios.map((servicio, index) => (
          <Servicio
            key={index}
            title={servicio.title}
            text={servicio.text}
            icon={servicio.icon}
          />
        ))}
      </div>
    </section>
  );
}

function Servicio({ title, text, icon }) {
  return (
    <div className="relative bg-gradient-to-br from-[#FFC107] to-[#FF5722] text-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center justify-between gap-6 basis-64 flex-1 shrink-0 min-[832px]:max-[1118px]:basis-96 group overflow-hidden">
      {/* Efecto de brillo */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FF037F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

      {/* Ícono con tamaño más grande y efecto hover */}
      <img
        className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
        src={icon}
        alt={title}
      />

      {/* Título */}
      <h4 className="font-bold text-2xl text-center font-title relative z-10">
        {title}
        <span className="block w-12 h-1 bg-[#FF037F] mt-2 mx-auto rounded-full"></span>
      </h4>

      {/* Descripción */}
      <p className="text-sm text-center leading-relaxed relative z-10">{text}</p>
    </div>
  );
}
