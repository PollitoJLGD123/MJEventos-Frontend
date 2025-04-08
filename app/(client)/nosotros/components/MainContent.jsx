'use client';

import React from 'react'
import { Accordion } from './Accordion';

export const MainContent = () => {

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 sm:px-8 lg:px-10">
            <div className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-1 bg-[#f1b647]"></div>
                    <h2 className="text-3xl font-bold text-gray-800">
                        Nosotros
                    </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed text-justify max-w-5xl">
                    <strong>Mj Eventos</strong> nos especializamos en la organización integral de eventos sociales como <strong>bodas, bautizos y cumpleaños formales.</strong> Nuestra misión es hacer realidad momentos únicos e inolvidables, cuidando cada detalle para que nuestros clientes vivan experiencias memorables. Contamos con un equipo comprometido y apasionado por la planificación, decoración y ejecución de celebraciones que marcan la diferencia.
                </p>
            </div>
            <div className="relative grid md:grid-cols-2 gap-16 mb-20">
                <Accordion title="VISIÓN" >
                    <p className="text-gray-600 text-justify leading-relaxed">
                    Ser la empresa aliada preferida en la organización de <strong>eventos sociales,</strong> destacando por nuestro compromiso, creatividad y excelencia en cada celebración, generando recuerdos imborrables para nuestros clientes y sus seres queridos.
                    </p>
                </Accordion>
                <div className="hidden md:block w-px bg-[#f1b647] absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
                <Accordion title="MISIÓN">
                    <p className="text-gray-600 text-justify leading-relaxed">
                    Brindar experiencias únicas a través de la <strong>planificación y realización de eventos personalizados,</strong> superando las expectativas de nuestros clientes mediante un servicio profesional, empático y enfocado en la perfección de cada detalle.
                    </p>
                </Accordion>
            </div>
        </div>
    )
}
