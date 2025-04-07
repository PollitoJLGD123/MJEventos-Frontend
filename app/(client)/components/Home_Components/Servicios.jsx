"use client";

import React from 'react';
import './services.css'
import {
    ServicesSection,
    WhyChooseSection
} from './components';
function services() {

    return (
        <div className='bg-[#151515]'>
            <section id="services ">
                <ServicesSection />
                <hr className="border-[#f1b647] border-2 w-[1200px] mx-auto" />
                <WhyChooseSection />
            </section>
        </div>
    );
}

export default services;
