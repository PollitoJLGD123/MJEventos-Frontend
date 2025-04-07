"use client";

import React from 'react';
import './services.css'
import Link from 'next/link';
import ServicesSection from './components/ServicesSection';
function services() {


    return (
        <div className='bg-[#151515]'>
            <section id="services ">
                <ServicesSection />
                <hr className="border-[#f1b647] border-2 w-[1200px] mx-auto" />
                <div className="services-main ">
                    <div className="services-text">
                        <h2 className='text-center text-[#f1b647]'>¿Por qué elegirnos?</h2>
                        <hr className="border-[#f1b647] border-2 w-[350px] mx-auto" />
                        <p className=' text-center text-[#f1b647]'>"Innovación, elegancia y profesionalismo en cada detalle"</p>
                        <p className='text-white text-center'>En MJ Eventos Especiales, nos distinguimos por</p>
                    </div>
                    <div className="services-4">
                        <div className="services">
                            <Link href="/servicios/desing-desarrollo" className="service">
                                <img src="/image-home/porque-elegirnos/inovacion.png" alt="Diseño y Desarrollo Web" />
                                <h3>Innovación</h3>
                                <p>Diseños modernos y versátiles que se adaptan a cualquier estilo.</p>
                            </Link>

                            <Link href="/servicios/gestion-redes" className="service">
                                <img src="/image-home/porque-elegirnos/confianza.png" alt="Gestión de Redes Sociales" />
                                <h3>Confianza</h3>
                                <p>Montajes seguros y resistentes para tu tranquilidad.</p>
                            </Link>

                            <Link href="/servicios/branding-desing" className="service">
                                <img src="/image-home/porque-elegirnos/responsabilidad.png" alt="Branding y Diseño" />
                                <h3>Responsabilidad</h3>
                                <p>Cumplimos con los tiempos de entrega y montaje.</p>
                            </Link>

                            <Link href="/servicios/marketing-gestion" className="service">
                                <img src="/image-home/porque-elegirnos/excelencia.png" alt="Marketing y Gestión Digital" />
                                <h3>Excelencia</h3>
                                <p>Cuidamos cada detalle para un acabado impecable.</p>
                            </Link>

                            <Link href="/servicios/marketing-gestion" className="service">
                                <img src="/image-home/porque-elegirnos/elegancia.png" alt="Marketing y Gestión Digital" />
                                <h3>Elegancia</h3>
                                <p>Creamos ambientes sofisticados y armoniosos.</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-white text-center'>"Confía en nosotros para tu próximo evento"</p>
                    </div>
                    <hr className="border-[#f1b647] border-2 w-[1200px] mx-auto my-20" />
                </div>
            </section>
        </div>
    );
}

export default services;
