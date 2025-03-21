import Link from 'next/link';
import Head from 'next/head';
import './Home.css';

export default function Banner() {
  return (
    <>
     <Head>
        <link rel="preload" href="/image-home/inicio.webp" as="image" />
      </Head>
    
    <main className="bg-[url(/image-home/inicio.webp)] bg-cover bg-[30%] h-[calc(100vh-67px)]">
      <div className="flex flex-col items-center justify-center h-full mx-4 md:justify-end md:items-start md:mx-0">
        <div className="bg-[#f1b647] text-center py-4 px-10 md:px-18 md:text-left">
          <h1 className="text-black font-bold text-4xl md:text-3xl max-w-xl">
          Creamos el escenario perfecto para tus momentos especiales
          </h1>
          <p className="text-black max-w-96 m-auto md:m-0">
          Desde montajes impecables hasta mobiliario elegante, nos encargamos de que tu evento luzca espectacular.
          </p>
        </div>
        <Link
          className="relative inline-flex items-center justify-center text-white font-bold px-8 py-4 rounded-full overflow-hidden shadow-md bg-gradient-to-r bg-[black] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none group mx-auto md:mx-0 mt-5 mb-8 translate-x-[5rem]" // Mover el botón 5rem a la derecha
          href="/contactanos"
        >

          <span className="relative z-10 text-[#f1b647]">¡CONTÁCTANOS!</span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#FCEE21]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FCEE21]/10 via-[#FCEE21]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></span>

          {/* Icono de flecha */}
          <svg
            className="absolute right-4 w-5 h-5 fill-white transition-transform duration-300 group-hover:translate-x-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </Link>
      </div>
    </main>
    </>
  );
}
