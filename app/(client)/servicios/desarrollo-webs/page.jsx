import Contactanos from '../components/Contactanos'; 
import Description from '../components/Description';
import Main from '../components/Main';
import ModalScroll from '../components/ModalScroll';
import ModalButton from '../components/ModalButton';
import Servicios from '../components/Servicios';
import './globales.css';

export default function Web() {

  const servicios = [
    {
      title: 'Protección total',
      text: 'Toldos y estructuras que garantizan la comodidad de tus invitados.',
      icon: '/servicios/DiseñoUI/servicio4.jpg',
    },
    {
      title: 'Estilo delicado y elegante',
      text: 'Decoración sofisticada que realza la celebración.',
      icon: '/servicios/DiseñoUI/servicio1.jpg',
    },
    {
      title: 'Versatilidad',
      text: 'Adaptamos los espacios a tus necesidades y preferencias.',
      icon: '/servicios/DiseñoUI/servicio2.jpg',
    },
    {
      title: 'Instalación rápida y sencilla',
      text: 'Montaje ágil sin complicaciones.',
      icon: '/servicios/DiseñoUI/servicio3.jpg',
    },
  ];
  
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-black overflow-x-hidden">
    {/* Imagen independiente sin reducción de opacidad */}
    <div className="floating-text4">
      <img 
        src="/servicios/DiseñoUI/bautizos.jpg" 
        alt="Fondo Bautizo" 
        className="floating-text4"
      />
    </div>


      <div className="relative z-10 w-full max-w-screen-lg px-4">
        <ModalScroll
          text="Protección y Encanto para un Día Especial"
          fondo="/bautizos/modal-scroll/fondo.webp"
          title="Bautizos"
          serviceName="bautizos"
        />

        <ModalButton
          title="Haz de este día algo inolvidable"
          fondo="/bautizos/modal-button/imagen.webp"
          text="Solicita una asesoría gratuita"
          serviceName="bautizos"
        />

        <div className="flex justify-center md:justify-start w-full">
          <Main
            title="Bautizos"
            image="/bautizos/img-main.png"
            className="custom-web2 py-10 md:py-20 text-center md:-ml-10"
          />
        </div>

        <div className="relative w-full h-full">
          <div className="floating-text2">
            <p className="font-montserrat text-white text-lg md:text-xl font-extrabold uppercase tracking-wide">
              Proteccion y Encanto para un dia especial
            </p>
          </div>

          <div className="floating-text3">
            <p className="font-montserrat text-white text-lg md:text-xl font-extrabold uppercase tracking-wide">
              Celebra el bautizo de tu pequeño con la tranquilidad de saber que todos tus invitados estaran comodos
              y protegidos. Nuestros toldos, mesa y sillas para bautizos ofrecen combinacion perfecta de estilo y funcionalidad, creando 
              un ambiente acogedor y elegante en cualquier lugar al aire libre 
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-[860px] md:mt-[300px] lg:mt-[550px] px-4">
          <Description
            title="Bautizos"
            text="Nuestros toldos, mesas y sillas ofrecen la combinación perfecta de estilo y funcionalidad, creando un ambiente acogedor y elegante."
          />

          <Servicios servicios={servicios} />

          <Contactanos
            text="Celebra el bautizo de tu bebe con toldos que combinan funcionalidad y delicadeza, en jardines, terrazas o salones"
            iconLeft="/bautizos/icon-left.svg"
            iconRight="/bautizos/icon-right.svg"
          />
        </div>
      </div>
    </div>
  );
}