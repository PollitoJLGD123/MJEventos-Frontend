'use client';

import React from 'react'

export const HeaderImage = () => {
    return (
        <div className="relative h-[400px] overflow-hidden">
            <img
                src="/Img-nosotros/NOSOTROS_1680_1050.webp"
                alt="Background"
                className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#f1b647] bg-opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-white rounded-full opacity-80"></div>
                        <div className="w-8 h-8 bg-white rounded-full -ml-2 opacity-80"></div>
                    </div>
                    <h1 className="text-5xl font-bold text-white tracking-wider shadow-lg">
                        ¿QUIÉNES SOMOS?
                    </h1>
                </div>
            </div>
        </div>
    )
}
