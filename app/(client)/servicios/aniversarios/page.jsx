import React from 'react';
import ServSec from '../components/ServSec';
import Contactanos from '../components/Contactanos';
import ModalButton from '../components/ModalButton';

export default function AniversarioEventos() {
    const targets = [
        { image: "/servicios/aniversarios/aniversario_eventos2.jpg", title: "Diseño personalizado" },
        { image: "/servicios/aniversarios/aniversario_eventos3.jpg", title: "Espacio amplio y cómodo" },
        { image: "/servicios/aniversarios/aniversario_eventos4.jpg", title: "Montaje rápido y sencillo" },
        { image: "/servicios/aniversarios/aniversario_eventos5.jpg", title: "Resistencia y calidad" }
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
                title="Aniversarios"
                subtitle=" Un Toque Especial para tu Celebración"
                description="Celebra tu aniversario con estilo y comodidad. Nuestros toldos, mesas y sillas son la opción perfecta para crear un ambiente único y acogedor, protegiendo a tus invitados mientras disfrutan de la celebración. Ya sea un aniversario de bodas, de empresa o cualquier otra conmemoración, nuestro mobiliario y toldos añaden un toque de elegancia y funcionalidad a tu evento."
                image="/servicios/aniversarios/aniversario_eventos1.jpg"
                targets={targets}
            />

            <Contactanos 
            text={"Ya sean 25 o 50 años, creamos ambientes íntimos o festivos que honran tu trayectoria en pareja."}
            />
        </>
    );
}