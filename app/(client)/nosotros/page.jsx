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
            <HeaderImage img={"/Img-nosotros/NOSOTROS_1680_1050.webp"} />

            <MainContent />

            <ButtonWhatsapp />

            <AdditionalImage img={"/Img-nosotros/infoNosotros.webp"} />

        </div>
    );
};

export default Nosotros;