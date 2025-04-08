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
            <HeaderImage img={"/Img-nosotros/bodas2.jpg"} />

            <MainContent />

            <ButtonWhatsapp />

            <AdditionalImage img={"/Img-nosotros/bodas3.jpg"} />

        </div>
    );
};

export default Nosotros;