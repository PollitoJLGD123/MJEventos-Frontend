"use client";

import React from 'react';
import Link from 'next/link';

const servicesData = [
    {
        title: 'Eventos empresariales',
        image: '/image-home/nuestros-servicios/img-eventos-empresariales.jpg',
        href: '/servicios/marketing-gestion'
    },
    {
        title: 'Fiestas de quince años',
        image: '/image-home/nuestros-servicios/img-quince.jpg',
        href: '/servicios/marketing-gestion'
    },
    {
        title: 'Bodas',
        image: '/image-home/nuestros-servicios/img-bodas.jpg',
        href: '/servicios/marketing-gestion'
    },
    {
        title: 'Bautizos',
        image: '/image-home/nuestros-servicios/img-bautizo.jpg',
        href: '/servicios/marketing-gestion'
    },
    {
        title: 'Cumpleaños',
        image: '/image-home/nuestros-servicios/img-cumple.jpg',
        href: '/servicios/marketing-gestion'
    },
    {
        title: 'Aniversarios',
        image: '/image-home/nuestros-servicios/img-aniversario.jpg',
        href: '/servicios/marketing-gestion'
    },
];

export const ServicesSection = () => {
    return (
        <div className="services-main ">
            <div className="services-text">
                <h2 className='text-center text-[#f1b647]'>NUESTROS SERVICIOS</h2>
                <hr className="border-[#f1b647] border-2 w-[400px] mx-auto" />
                <p className='text-white text-center p-2'>Ofrecemos una amplia gama de mobiliario y accesorios para todo tipo de celebraciones:</p>
            </div>
            <div className="services-4">
                <div className="flex gap-2">
                    {servicesData.map((service, index) => (
                        <Link key={index} href={service.href} className="nuestroServicio">
                            <img src={service.image} className="w-[150px]" alt={service.title} />
                            <h3 className="p-2">{service.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

    );
}