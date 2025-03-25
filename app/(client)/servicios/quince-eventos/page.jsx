import React from 'react';
import ServSec from '../components/ServSec';
import Contactanos from '../components/Contactanos';

export default function QuinceEventos() {
    const targets = [
        { image: "/servicios/quince-eventos/quince2.png", title: "Asesoría integra" },
        { image: "/servicios/quince-eventos/quince3.png", title: "Montaje impecable" },
        { image: "/servicios/quince-eventos/quince4.png", title: "Materiales premium" },
        { image: "/servicios/quince-eventos/quince5.png", title: "Flexibilidad" }
    ];

    return (
        <>
            <ServSec
                title="Fiesta de Quince Años"
                subtitle=" Elegancia y Magia en Cada Detalle"
                description="Nuestros toldos, mesas y sillas para quinceañeras combinan protección, estilo y comodidad, ideales para fiestas íntimas, celebraciones temáticas o eventos al aire libre. Adaptamos diseños, colores y disposición para crear un ambiente de ensueño que refleje la personalidad de la quinceañera."
                image="/servicios/quince-eventos/quince1.jpg"
                targets={targets}
            />

            <Contactanos
            text={"Celebra tus 15 años bajo toldos que combinan elegancia y funcionalidad, diseñados para bodas de quince íntimas o fiestas temáticas al aire libre."}
            />
        </>
    );
}