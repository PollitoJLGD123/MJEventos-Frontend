"use client";
import { useState, useEffect, useRef } from "react";

export default function Clientes() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [noTransition, setNoTransition] = useState(false);
  const transitionDuration = 700;
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null); 
  const clientes = [
    { src: "/image-home/neonLedPublicidad.png", alt: "Contigo Voy logo"},
    { src: "/image-home/digimedia.png", alt: "Digimedia logo"},
    { src: "/image-home/nhl.png", alt: "NHL logo"},
    { src: "/image-home/tami.png", alt: "Tami logo"},
    { src: "/image-home/yuntas.png", alt: "Yuntas logo"},
    
  ];

    {/* CARRUSEL RESPONSIVE */}

  const slides = [
    clientes[clientes.length - 1],
    ...clientes,
    clientes[0],
  ];

  const nextSlide = () => {
    setNoTransition(false);
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    setNoTransition(false);
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    clearTimeout(timeoutRef.current);

    if (activeIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setNoTransition(true);
        setActiveIndex(slides.length - 2);
      }, transitionDuration);
    } else if (activeIndex === slides.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setNoTransition(true);
        setActiveIndex(1);
      }, transitionDuration);
    }
    
    return () => clearTimeout(timeoutRef.current);
  }, [activeIndex]);

  const handleManualChange = (index) => {
    setNoTransition(false);
    setActiveIndex(index + 1);
  };

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const resetAutoSlide = () => {
    startAutoSlide();
  };


  {/* SECCIÓN NUESTROS CLIENTES */}

  return (
    <section className="py-6 px-12 bg-[#151515]">
      <h3 className="text-3xl text-[#f1b647] text-center">Empresas que confían en nosotros</h3>

      <div className="relative w-full md:hidden overflow-hidden" data-carousel="slide">
        
        
        <div className={`flex ${!noTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

          {slides.map((cliente, index) => (
            <div key={index} className="flex-shrink-0 w-full h-56">
              <a href={cliente.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={cliente.src}
                  alt={cliente.alt}
                  className="block w-full h-full object-contain"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {clientes.map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-500 ${index === (activeIndex - 1 + clientes.length) % clientes.length
                  ? "bg-[#752E75] w-[1.25rem]"
                  : "bg-gray-300 w-3"
                }`}
              onClick={() => {
                handleManualChange(index);
                resetAutoSlide();
              }}
            />
          ))}
        </div>

        <button
          onClick={() => {
            prevSlide();
            resetAutoSlide();
          }}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-0"
        >
          <span className="text-[#752E75] text-3xl">&#10094;</span>
        </button>

        <button
          onClick={() => {
            nextSlide();
            resetAutoSlide();
          }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-0"
        >
          <span className="text-[#752E75] text-3xl">&#10095;</span>
        </button>
      </div>
      <div className="hidden md:flex gap-14 justify-center items-center max-w-max m-auto flex-wrap py-20">
        {clientes.map((cliente) => (
          <a
            key={cliente.alt}
            href={cliente.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={`w-[200px] ${cliente.alt === "prevemedic logo" ? "scale-150" : ""}`} 
              src={cliente.src} 
              alt={cliente.alt}  />
          </a>
        ))}
      </div>
    </section>
  );
}
