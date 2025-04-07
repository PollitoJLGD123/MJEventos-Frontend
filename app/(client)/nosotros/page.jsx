'use client';

import React from 'react';
import "./page.css";
import {
    HeaderImage,
    MainContent,
    ButtonWhatsapp,
    AdditionalImage
} from './components';

const Nosotros = () => {
    return (
        <div className="min-h-screen bg-white">
            <HeaderImage />

            <MainContent />

            <ButtonWhatsapp />

            <AdditionalImage />

        </div>
    );
};

export default Nosotros;