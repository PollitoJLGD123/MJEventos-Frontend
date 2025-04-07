'use client';

import React, { useState } from 'react'

export const Accordion = ({ title, children }) => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="group bg-white shadow-lg p-6 rounded-lg transition-transform transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={() => setIsActive(!isActive)}
        >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                <span className="text-yellow-600">{title}</span>
            </h3>
            {isActive && (
                <>
                    {children}
                </>
            )}
        </div>
    );
};