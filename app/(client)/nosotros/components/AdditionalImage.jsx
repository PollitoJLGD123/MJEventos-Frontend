'use client';

import React from 'react'

export const AdditionalImage = ({ img }) => {
    return (
        <div className="flex justify-center pt-2 pb-16">
            <img
                src={img}
                alt="Información adicional"
                className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
            />
        </div>
    )
}
