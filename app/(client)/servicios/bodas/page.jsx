import React from 'react';
import ServSec from '../components/ServSec';
import Contactanos from '../components/Contactanos';
import ModalButton from '../components/ModalButton';

export default function BodaEventos() {
    const targets = [
        { image: "/servicios/boda/boda2.jpg", title: "Estilo y sofisticación" },
        { image: "/servicios/boda/boda3.jpg", title: "Versatilidad" },
        { image: "/servicios/boda/boda4.jpg", title: "Comodidad" },
        { image: "/servicios/boda/boda5.jpg", title: "Fácil instalación" }
    ];

    return (
        <>  
            <ModalButton
            title="Celebra tu aniversario con estilo"
            fondo="/servicios/desarrollo/modal-button/imagen.webp"
            text="DISEÑO Y DESARROLLO WEB"
            serviceName="1"
            />

            <ServSec
                title="Bodas"
                subtitle="Elegancia y Comodidad en tu Gran Día"
                description="Haz que tu boda sea aún más especial con nuestros toldos, mesas y sillas diseñados para brindar estilo, confort y protección. Protege a tus seres queridos de las inclemencias del tiempo sin sacrificar la elegancia. Ya sea en un hermoso jardín, en la playa o en cualquier lugar al aire libre, nuestro mobiliario y toldos crean el ambiente perfecto para tu celebración."
                image="/servicios/boda/boda1.jpg"
                targets={targets}
            />

            <Contactanos 
            text={"Ten la mejor boda con nosotros"}
            />
        </>
    );
}