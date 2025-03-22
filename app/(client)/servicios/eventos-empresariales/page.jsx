import React from 'react';
import Contactanos from '../components/Contactanos';
import Description from '../components/Description';

export default function EventosEmpresariales() {

    return (  
        <section className='bg-grisbg text-white py-16 px-4'>
        
        <div className='container mx-auto flex flex-col md:flex-row items-start gap-8 w-10/12'>
            {/* Primer bloque_Parte texto */}
            <div className=' md:w-1/2 text-center md:text-left mb-8 md:mb-0 min-h-full'>
                <h2 className='text-4xl font-semibold text-dorado mb-4'>Eventos Empresariales</h2>
                <h3 className="text-xl text-gray-400 mb-6">Protección y Elegancia en Cada Detalle</h3>
                <p className=" text-lg text-gray-300 lg:text-justify">Nuestros toldos, mesas y sillas para eventos empresariales ofrecen protección, estilo y confort, ideales para ferias, congresos, lanzamientos y más. Nos adaptamos a las necesidades de tu evento corporativo para crear un ambiente profesional y sofisticado.</p>
            </div>

            {/* Segundo bloque_Parte imagen */}
            <div className='md:w-1/2 flex justify-center min-h-full items-center'>
                <img className='w-full md:w-3/4 lg:w-2/3 h-auto md:h-auto object-cover shadow-lg border-solid border-2 border-dorado rounded-none overflow-hidden' src="/servicios/eventos-empresariales/eventos1.jpg" alt="background_eventos" />
            </div>
        </div>

        {/* Contenedor de targets */}
        <div className='container mt-8 mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-10/12'>

            {/* Bloque 1 */}
            <div className="bg-rosadotarget p-6 rounded-3xl shadow-lg text-center hover:bg-orange-500 hover:scale-105 transition duration-300">
            <img className='w-full h-90 object-cover rounded-3xl mb-4'src="/servicios/eventos-empresariales/evento2.png"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Versatilidad</h3>
            </div>

            {/* Bloque 2 */}
            <div className="bg-rosadotarget p-6 rounded-3xl shadow-lg text-center hover:bg-orange-500 hover:scale-105 transition duration-300">
            <img className='w-full h-90 object-cover rounded-3xl mb-4'src="/servicios/eventos-empresariales/evento3.png"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Diseño personalizable</h3>
            </div>

            {/* Bloque 3 */}
            <div className="bg-rosadotarget p-6 rounded-3xl shadow-lg text-center hover:bg-orange-500 hover:scale-105 transition duration-300">
            <img className='w-full h-90 object-cover rounded-3xl mb-4'src="/servicios/eventos-empresariales/evento4.png"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Comodidad</h3>
            </div>

            {/* Bloque 4 */}
            <div className="bg-rosadotarget p-6 rounded-3xl shadow-lg text-center hover:bg-orange-500 hover:scale-105 transition duration-300">
            <img className='w-full h-90 object-cover rounded-3xl mb-4'src="/servicios/eventos-empresariales/evento5.png"/>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fácil instalación</h3>
            </div>

        </div>

        <Contactanos/>

    </section>      
   
    );
}