"use client";

import React from "react";
import { faFacebook, faInstagram, faLinkedin, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { SocialMediaLink } from "./SocialMediaLink";

export const SocialMediaContainer = () => {
    const socialMediaLinks = [
        { href: "https://www.facebook.com/DigiMedia.Marketing1", icon: faFacebook },
        { href: "https://www.instagram.com/digimediamkt/", icon: faInstagram },
        { href: "https://www.linkedin.com/in/digimedia-marketing/", icon: faLinkedin },
        { href: "https://www.tiktok.com/@digimediamkt", icon: faTiktok },
        { href: "https://www.youtube.com/@digimediamarketing", icon: faYoutube },
    ];

    return (
        <div className="contenedor-redes">
            {socialMediaLinks.map((link, index) => (
                <SocialMediaLink key={index} href={link.href} icon={link.icon} />
            ))}
        </div>
    );
};
