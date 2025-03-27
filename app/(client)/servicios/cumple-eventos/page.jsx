import React from 'react';
import ServSec from '../components/ServSec';
import Contactanos from '../components/Contactanos';
import ModalButton from '../components/ModalButton';

export default function CumpleañosEventos() {
    const targets = [
        { image: "/servicios/cumple_eventos/cumple_eventos2.jpg", title: "Fiesta bajo protección" },
        { image: "/servicios/cumple_eventos/cumple_eventos3.jpg", title: "Diseño personalizado" },
        { image: "/servicios/cumple_eventos/cumple_eventos4.jpg", title: "Espacio amplio y cómodo" },
        { image: "/servicios/cumple_eventos/cumple_eventos5.jpg", title: "Montaje rápido y sencillo" }
    ];

    return (
        <>
            <ModalButton
            title="Celebra tu cumpleaños con estilo"
            fondo="/servicios/desarrollo/modal-button/imagen.webp"
            text="DISEÑO Y DESARROLLO WEB"
            serviceName="1"
                    />
            <ServSec
                title="Cumpleaños"
                subtitle=" Protección y Encanto para un Día Especial"
                description="Haz que tu cumpleaños sea inolvidable con nuestros toldos, mesas y sillas, diseñados para brindar comodidad y estilo a tu celebración. Protege a tus invitados del sol o la lluvia mientras disfrutan de un ambiente acogedor y bien decorado, ideal para fiestas al aire libre."
                image="/servicios/cumple_eventos/cumple_eventos1.jpg"
                targets={targets}
            />

            <Contactanos
            text={"Celebra bajo toldos que resisten el sol, la lluvia o el viento, mientras creamos un ambiente colorido y temático para tu fiesta."}
            />
        </>
    );
}