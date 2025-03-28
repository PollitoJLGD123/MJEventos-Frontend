import React from 'react';
import ServSec from '../components/ServSec';
import Contactanos from '../components/Contactanos';
import ModalButton from '../components/ModalButton';

export default function BautizoEvento() {
    const targets = [
        { image: "/servicios/bautizo/bautizo2.jpg", title: "Protección total" },
        { image: "/servicios/bautizo/bautizo3.jpg", title: "Estilo delicado y elegante" },
        { image: "/servicios/bautizo/bautizo4.jpg", title: "Versatilidad" },
        { image: "/servicios/bautizo/bautizo5.jpg", title: "Instalación rápida y sencilla" }
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
                title="Bautizos"
                subtitle="Protección y Encanto para un Día Especial"
                description="Celebra el bautizo de tu pequeño con la tranquilidad de saber que todos tus invitados estarán cómodos y protegidos. Nuestros toldos, mesas y sillas para bautizos ofrecen la combinación perfecta de estilo y funcionalidad, creando un ambiente acogedor y elegante en cualquier lugar al aire libre."
                image="/servicios/bautizo/bautizo1.jpg"
                targets={targets}
            />

            <Contactanos 
            text={"Creamos ambientes únicos que celebran el bautizo con amor y devoción."}
            />
        </>
    );
}