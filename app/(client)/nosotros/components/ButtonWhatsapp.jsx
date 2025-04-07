'use client';

import React from 'react'

export const ButtonWhatsapp = ({ linkWhatsApp }) => {
    return (
        <a href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
            <div className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer">
                <i className="fab fa-whatsapp text-white text-3xl"></i>
            </div>
        </a>
    )
}
