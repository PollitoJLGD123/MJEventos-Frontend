import React from 'react';
import './services.css'
import Link from 'next/link';
function services() {
    return (
        <div className='bg-[#151515]'>
            <section id="services ">
                <div className="services-main ">
                    <div className="services-text">
                        <h2 className='text-center text-[#f1b647]'>NUESTROS SERVICIOS</h2>
                        <hr className="border-[#f1b647] border-2 w-[400px] mx-auto" />
                        <p className='text-white text-center'>Ofrecemos una amplia gama de mobiliario y accesorios para todo tipo de celebraciones:</p>
                    </div>
                    <div className="services-4">
                        <div className="services">
                            <div href="/servicios/desing-desarrollo" className="service">
                                <img src="/image-home/icon1.svg" alt="Diseño y Desarrollo Web" />
                                <h3>Diseño y Desarrollo Web</h3>
                                <p>"Creamos sitios atractivos y funcionales que representan tu marca"</p>
                            </div>

                            <Link href="/servicios/gestion-redes" className="service">
                                <img src="/image-home/icon2.svg" alt="Gestión de Redes Sociales" />
                                <h3>Gestión de Redes Sociales</h3>
                                <p>"Aumenta tu presencia online y conectamos con tu audiencia"</p>
                            </Link>

                            <Link href="/servicios/branding-desing" className="service">
                                <img src="/image-home/icon3.svg" alt="Branding y Diseño" />
                                <h3>Branding y Diseño</h3>
                                <p>"Construimos una identidad visual fuerte y memorable"</p>
                            </Link>

                            <Link href="/servicios/marketing-gestion" className="service">
                                <img src="/image-home/icon4.svg" alt="Marketing y Gestión Digital" />
                                <h3>Marketing y Gestión Digital</h3>
                                <p>"Aumenta tu presencia en redes sociales y con marketing digital"</p>
                            </Link>
                        </div>
                    </div> 
                </div>
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
                                <img src="/image-home/icon1.svg" alt="Diseño y Desarrollo Web" />
                                <h3>Diseño y Desarrollo Web</h3>
                                <p>"Creamos sitios atractivos y funcionales que representan tu marca"</p>
                            </Link>

                            <Link href="/servicios/gestion-redes" className="service">
                                <img src="/image-home/icon2.svg" alt="Gestión de Redes Sociales" />
                                <h3>Gestión de Redes Sociales</h3>
                                <p>"Aumenta tu presencia online y conectamos con tu audiencia"</p>
                            </Link>

                            <Link href="/servicios/branding-desing" className="service">
                                <img src="/image-home/icon3.svg" alt="Branding y Diseño" />
                                <h3>Branding y Diseño</h3>
                                <p>"Construimos una identidad visual fuerte y memorable"</p>
                            </Link>

                            <Link href="/servicios/marketing-gestion" className="service">
                                <img src="/image-home/icon4.svg" alt="Marketing y Gestión Digital" />
                                <h3>Marketing y Gestión Digital</h3>
                                <p>"Aumenta tu presencia en redes sociales y con marketing digital"</p>
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
