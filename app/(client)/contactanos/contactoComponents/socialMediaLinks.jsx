"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// Importa el componente y los iconos que vas a usar
import { SocialMediaContainer } from "./components/SocialMediaContainer";

const SocialMediaLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="formContainer"
      initial={{ opacity: 0, y: "30%" }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
      style={{ overflow: "hidden" }}
    >
      <div className="tarjeta-redes">
        <h3 style={{ color: '#FFC107' }} >Conéctate con nosotros</h3>
        <SocialMediaContainer />
      </div>
    </motion.div>
  );
};

export default SocialMediaLinks;
