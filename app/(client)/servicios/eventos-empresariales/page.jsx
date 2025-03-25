import React from 'react';
import ServSec from '../components/ServSec';
import Contactanos from '../components/Contactanos';

export default function EventosEmpresariales() {
    const targets = [
        { image: "/servicios/eventos-empresariales/evento2.png", title: "Versatilidad" },
        { image: "/servicios/eventos-empresariales/evento3.png", title: "Diseño personalizable" },
        { image: "/servicios/eventos-empresariales/evento4.png", title: "Comodidad" },
        { image: "/servicios/eventos-empresariales/evento5.png", title: "Fácil instalación" }
    ];

    return (
        <>
            <ServSec
                title="Eventos Empresariales"
                subtitle="Protección y Elegancia en Cada Detalle"
                description="Nuestros toldos, mesas y sillas para eventos empresariales ofrecen protección, estilo y confort, ideales para ferias, congresos, lanzamientos y más. Nos adaptamos a las necesidades de tu evento corporativo para crear un ambiente profesional y sofisticado."
                image="/servicios/eventos-empresariales/eventos1.jpg"
                targets={targets}
            />

            <Contactanos />
        </>
    );
}