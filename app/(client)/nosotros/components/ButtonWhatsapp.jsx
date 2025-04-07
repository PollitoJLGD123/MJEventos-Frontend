'use client';

import React from 'react'

export const ButtonWhatsapp = () => {

    const mensaje = "Hola, vengo de la pagina web de Digimedia, deseo mas información! 👌";
    const numeroWhatsApp = "51936910425";
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    return (
        <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
            <div className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer">
                <i className="fab fa-whatsapp text-white text-3xl"></i>
            </div>
        </a>
    )
}
