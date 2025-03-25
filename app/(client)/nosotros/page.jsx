'use client';
import React, { useState } from 'react';
import "./page.css";

const Nosotros = () => {
    const mensaje = "Hola, vengo de la pagina web de Digimedia, deseo mas información! 👌";
    const numeroWhatsApp = "51936910425";
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Estados para controlar la visibilidad del texto de VISIÓN y MISIÓN
    const [showVision, setShowVision] = useState(false);
    const [showMision, setShowMision] = useState(false);

    return (
        <div className="min-h-screen bg-[#151515]">
            <div className="relative h-[400px] overflow-hidden">
                <img
                    src="/Img-nosotros/NOSOTROS_1680_1050.webp"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#7B22B3] bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
                            <div className="w-8 h-8 bg-white rounded-full -ml-2 opacity-80"></div>
                        </div>
                        <h1 className="text-5xl font-bold text-[#ea9d2f] tracking-wider shadow-lg">
                            ¿QUIÉNES SOMOS?
                        </h1>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-16 sm:px-8 lg:px-10">
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-1 bg-purple-600"></div>
                        <h2 className="text-3xl font-bold text-[#ea9d2f]">
                            Nosotros
                        </h2>
                    </div>
                    <p className="text-white text-lg leading-relaxed text-justify max-w-5xl">
                    En <strong>MJ Eventos Especiales</strong>,nos especializamos en la renta de toldos, mesas, sillas y mobiliario para todo tipo de eventos. Nos destacamos por nuestra puntualidad, calidad y atención al detalle, garantizando montajes impecables y adaptados a la visión de cada ocasión. Creamos ambientes armoniosos y confortables, combinando experiencia, elegancia e innovación para transformar espacios y hacer de tu evento algo inolvidable. ¡Hazlo un éxito con nosotros!
                    </p>
                </div>
                <div className="relative grid md:grid-cols-2 gap-16 mb-20">
                    {/* VISIÓN */}
                    <div
                        className="group bg-black shadow-lg p-6 rounded-lg transition-transform transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                        onClick={() => setShowVision(!showVision)}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                            <span className="text-[#ea9d2f]">VISIÓN</span>
                        </h3>
                        {showVision && (
                            <p className="text-white text-justify leading-relaxed">
                                Ser la empresa líder en alquiler de toldos. mesas y sillas a nivel nacional, reconocida por nuestra innovación, excelencia y compromiso con la satisfacción del cliente. Buscamos expandir nuestra oferta con productos y diseños modernos y versátiles que se adapten a las necesidades de cada evento.
                            </p>
                        )}
                    </div>
                    {/* Divisor vertical */}
                    <div className="hidden md:block w-px bg-purple-600 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    {/* MISIÓN */}
                    <div
                        className="group  bg-black shadow-lg p-6 rounded-lg transition-transform transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                        onClick={() => setShowMision(!showMision)}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                            <span className="text-[#ea9d2f]">MISIÓN</span>
                        </h3>
                        {showMision && (
                            <p className="text-white text-justify leading-relaxed">
                                Brindar soluciones versátiles y de calidad en alquiler de toldos, mesas y sillas para todo tipo de eventos en Lima, Perú, asegurando protección, innovación, confort y estética. Nos comprometemos a ofrecer un servicio eficiente, con materiales de alta durabilidad y un equipo profesional que garantice la mejor experiencia para nuestros clientes en ese día especial.          
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
                <div className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer">
                    <i className="fab fa-whatsapp text-white text-3xl"></i>
                </div>
            </a>
            <div className="flex justify-center pt-2 pb-16">
                <img
                    src="/Img-nosotros/nosotrosmj.jpg"
                    alt="Información adicional"
                    className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Nosotros;