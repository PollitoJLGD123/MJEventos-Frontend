"use client";

import React from 'react';
import Link from 'next/link';

const whyChooseData = [
  {
    title: 'Innovación',
    image: '/image-home/porque-elegirnos/inovacion.png',
    description: 'Diseños modernos y versátiles que se adaptan a cualquier estilo.',
    href: '/servicios/desing-desarrollo'
  },
  {
    title: 'Confianza',
    image: '/image-home/porque-elegirnos/confianza.png',
    description: 'Montajes seguros y resistentes para tu tranquilidad.',
    href: '/servicios/gestion-redes'
  },
  {
    title: 'Responsabilidad',
    image: '/image-home/porque-elegirnos/responsabilidad.png',
    description: 'Cumplimos con los tiempos de entrega y montaje.',
    href: '/servicios/branding-desing'
  },
  {
    title: 'Excelencia',
    image: '/image-home/porque-elegirnos/excelencia.png',
    description: 'Cuidamos cada detalle para un acabado impecable.',
    href: '/servicios/marketing-gestion'
  },
  {
    title: 'Elegancia',
    image: '/image-home/porque-elegirnos/elegancia.png',
    description: 'Creamos ambientes sofisticados y armoniosos.',
    href: '/servicios/marketing-gestion'
  },
];

export const WhyChooseSection = () => {
  return (
    <div className="services-main ">
      <div className="services-text">
        <h2 className='text-center text-[#f1b647]'>¿Por qué elegirnos?</h2>
        <hr className="border-[#f1b647] border-2 w-[350px] mx-auto" />
        <p className=' text-center text-[#f1b647]'>"Innovación, elegancia y profesionalismo en cada detalle"</p>
        <p className='text-white text-center'>En MJ Eventos Especiales, nos distinguimos por</p>
      </div>
      <div className="services-4">
        <div className="services">
          {whyChooseData.map((feature, index) => (
            <Link key={index} href={feature.href} className="service">
              <img src={feature.image} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className='text-white text-center'>"Confía en nosotros para tu próximo evento"</p>
      </div>
      <hr className="border-[#f1b647] border-2 w-[1200px] mx-auto my-20" />
    </div>
  )
}
