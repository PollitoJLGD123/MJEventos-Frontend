'use client';
import React, { useState } from 'react';
import "./page.css";
import { AdditionalImage } from './components/AdditionalImage';
import { MainContent } from './components/MainContent';
import { ButtonWhatsapp } from './components/ButtonWhatsapp';
import { HeaderImage } from './components/HeaderImage';

const Nosotros = () => {
    const mensaje = "Hola, vengo de la pagina web de Digimedia, deseo mas información! 👌";
    const numeroWhatsApp = "51936910425";
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Estados para controlar la visibilidad del texto de VISIÓN y MISIÓN
    const [showVision, setShowVision] = useState(false);
    const [showMision, setShowMision] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Encabezado con imagen de fondo */}
            <HeaderImage />

            {/* Contenido principal */}
            <MainContent
                setShowVision={setShowVision}
                showVision={showVision}
                setShowMision={setShowMision}
                showMision={showMision}
            />

            {/* Botón de WhatsApp */}
            <ButtonWhatsapp linkWhatsApp={linkWhatsApp} />

            {/* Imagen adicional */}
            <AdditionalImage />

        </div>
    );
};

export default Nosotros;