'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import './Header.css';

export default function Header2() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const isActive = (path) => pathname === path || pathname === `${path}/`;

  const closeMenu = () => {
    setMenuOpen(false);
    setIsServiceOpen(false);
    setIsMoreOpen(false);
  };

  return (
    <header className="header">
      <div className="contenidoHeader">
        <div className="logoHeader flex items-center">
          <Link href="/" onClick={closeMenu}>
            <img
              src="/image-home/mj-eventos.png"
              alt="Digimedia"
              width="120px"
              className="my-auto"
            />
          </Link>
        </div>

        <div className="seccionesHeader">
          <input type="checkbox" id="menucheckbox" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
          <label htmlFor="menucheckbox">
            <img src="/headerFooter/menu.webp" alt="menú" className="menuIcono" width="25" height="25" />
          </label>
          <ul className="menuHorizontal">
            <li className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
              <Link href="/">Inicio</Link>
            </li>
            <li className={isActive('/servicios') ? 'active' : ''} onClick={() => setIsServiceOpen(!isServiceOpen)}>
              <p>Servicios &#9660;</p>
              {isServiceOpen && (
                <ul className="menuVertical">
                  <li className={isActive('/servicios/eventos-empresariales') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/servicios/eventos-empresariales">Eventos Empresariales</Link>
                  </li>
                  <li className={isActive('/servicios/cumple-eventos') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/servicios/cumple-eventos">Cumpleaños</Link>
                  </li>
                  <li className={isActive('/servicios/aniversarios') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/servicios/aniversarios">Aniversarios</Link>
                  </li>
                  <li className={isActive('/servicios/quince-eventos') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/servicios/quince-eventos">Fiestas de Quince Años</Link>
                  </li>
                  <li className={isActive('/servicios/bautizos') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/servicios/bautizos">Bautizos</Link>
                  </li>
                  <li className={isActive('/servicios/bodas') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/servicios/bodas">Bodas</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={isActive('/nosotros') ? 'active' : ''} onClick={closeMenu}>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li className={isActive('/blog') || isActive('/preguntas') || isActive('/contactanos') ? 'active' : ''} 
                onClick={() => setIsMoreOpen(!isMoreOpen)}>
              <p>Más &#9660;</p>
              {isMoreOpen && (
                <ul className="menuVertical">
                  <li className={isActive('/blog') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className={isActive('/preguntas') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/preguntas">FQA</Link>
                  </li>
                  <li className={isActive('/contactanos') ? 'active-sub' : ''} onClick={closeMenu}>
                    <Link href="/contactanos">Contacto</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={isActive('/login') ? 'active' : ''} onClick={closeMenu}>
              <Link href="/login">Ingresar</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
