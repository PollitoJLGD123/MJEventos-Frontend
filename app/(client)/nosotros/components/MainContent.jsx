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
                    <strong>Digimedia</strong> es una empresa de marketing digital, que se enfoca en <strong>potenciar tu emprendimiento</strong> a nivel online. Además, le brinda a tu emprendimiento estrategias que ayudan a cumplir los objetivos de manera eficaz. Somos un grupo de personas comprometidas con el desarrollo de cada marca que nos contacta.
                </p>
            </div>
            <div className="relative grid md:grid-cols-2 gap-16 mb-20">
                <Accordion title="VISIÓN" >
                    <p className="text-gray-600 text-justify leading-relaxed">
                        Ser aliado de los <strong>emprendimientos</strong> en su posicionamiento digital; mediante la generación de contenido estratégico que garantice el cumplimiento de los objetivos planteados.
                    </p>
                </Accordion>
                <div className="hidden md:block w-px bg-[#f1b647] absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
                <Accordion title="MISIÓN">
                    <p className="text-gray-600 text-justify leading-relaxed">
                        Liderar la transformación digital de las <strong>PYME</strong> en el Perú; estableciendo vínculos sólidos entre nuestros clientes y sus respectivas audiencias.
                    </p>
                </Accordion>
            </div>
        </div>
    )
}
