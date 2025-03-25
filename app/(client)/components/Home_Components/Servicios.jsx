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
                        <p className='text-white text-center p-2'>Ofrecemos una amplia gama de mobiliario y accesorios para todo tipo de celebraciones:</p>
                    </div>
                    <div className="services-4">
                        <div className="flex gap-2">
                            <Link href="/" className="nuestroServicio">
                                <img src="/image-home/nuestros-servicios/img-eventos-empresariales.jpg" className='w-[150px]' alt="Diseño y Desarrollo Web" />
                                <h3 className='p-2'>Eventos empresariales</h3>
                            </Link>

                            <Link href="/" className="nuestroServicio">
                                <img src="/image-home/nuestros-servicios/img-quince.jpg" className='w-[150px]' alt="Diseño y Desarrollo Web" />
                                <h3 className='p-2'>Fiestas de quince años</h3>
                            </Link>

                            <Link href="/" className="nuestroServicio">
                                <img src="/image-home/nuestros-servicios/img-bodas.jpg" className='w-[150px]' alt="Diseño y Desarrollo Web" />
                                <h3 className='p-2'>Bodas</h3>
                            </Link>

                            <Link href="/" className="nuestroServicio">
                                <img src="/image-home/nuestros-servicios/img-bautizo.jpg" className='w-[150px]' alt="Diseño y Desarrollo Web" />
                                <h3 className='p-2'>Bautizos</h3>
                            </Link>

                            <Link href="/" className="nuestroServicio">
                                <img src="/image-home/nuestros-servicios/img-cumple.jpg" className='w-[150px]' alt="Diseño y Desarrollo Web" />
                                <h3 className='p-2'>Cumpleaños</h3>
                            </Link>

                            <Link href="/" className="nuestroServicio">
                                <img src="/image-home/nuestros-servicios/img-aniversario.jpg" className='w-[150px]' alt="Diseño y Desarrollo Web" />
                                <h3 className='p-2'>Aniversarios</h3>
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
