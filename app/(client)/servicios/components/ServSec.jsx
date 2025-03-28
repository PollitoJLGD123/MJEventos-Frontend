import React from 'react';

const ServSec = ({ title, subtitle, description, image, targets }) => (
    <section className='bg-grisbg text-white py-16 px-4'>
        <div className='container mx-auto flex flex-col md:flex-row items-start gap-8 w-10/12'>
            {/* Primer bloque_Parte texto */}
            <div className=' md:w-1/2 text-center md:text-left mb-8 md:mb-0 min-h-full'>
                <h2 className='text-4xl font-semibold text-dorado mb-4'>{title}</h2>
                <h3 className="text-xl text-gray-400 mb-6">{subtitle}</h3>
                <p className=" text-lg text-gray-300 lg:text-justify">{description}</p>
            </div>

            {/* Segundo bloque_Parte imagen */}
            <div className='md:w-1/2 flex justify-center min-h-full items-center'>
                <img className='w-full md:w-3/4 lg:w-2/3 h-auto md:h-auto object-cover shadow-lg border-solid border-2 border-dorado rounded-none overflow-hidden' src={image} alt={title} />
            </div>
        </div>

        {/* Contenedor de targets */}
        <div className='container mt-8 mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-10/12'>
            {targets.map((target, index) => (
                <div key={index} className="bg-rosadotarget p-6 rounded-3xl shadow-lg text-center hover:bg-orange-500 hover:scale-105 transition duration-300 group">
                    <img className='w-full h-90 object-cover rounded-3xl mb-4' src={target.image} alt={target.title} />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-white">{target.title}</h3>
                </div>
            ))}
        </div>
    </section>
);

export default ServSec;