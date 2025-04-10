"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialMediaLink = ({ href, icon }) => {
    return (
        <div className="red">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={icon} size="2x" />
            </a>
        </div>
    );
};