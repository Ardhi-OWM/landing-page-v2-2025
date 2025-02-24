import React from 'react';

import Section from './Section';
import { socials } from '../constants';
import { prototypefund, okfd, bbf } from '../assets';

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10" >
            {/* Top section with contact information on the left and social icons on the right */}
            <div className='container flex sm:justify-between justify-center items-center gap-10 max:sm:flex-col mb-5'>
                <div className="flex justify-start">
                    <p className='caption text-n-4 '>
                        Contact us: <a href="mailto:info@ardhi.com" className="text-primary hover:underline">info@ardhi.com</a>
                    </p>
                </div>
                <ul className="flex gap-5 flex-wrap justify-end">
                    {socials.map((item) => (
                        <a key={item.id}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6'
                        >
                            <img src={item.iconUrl} alt={item.title}
                                width={16} height={16} />
                        </a>
                    ))}
                </ul>
            </div>

            {/* HR line for the logos */}
            <div className="flex justify-center items-center w-full">
                <div className="w-full sm:w-1/3 flex items-center relative">
                    {/* Left line with gradient fading out to the left */}
                    <div className="flex-grow relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-1/2 before:h-[2px] before:bg-gradient-to-r from-purple-400 via-green-400 to-transparent"></div>
                    {/* Text in the middle */}
                    <span className="shrink px-3 pb-1 z-10 text-n-10 caption">Supported By</span>
                    {/* Right line with gradient fading out to the right */}
                    <div className="flex-grow relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-1/2 before:h-[2px] before:bg-gradient-to-r from-transparent via-green-400 to-purple-400"></div>
                </div>
            </div>

            {/* Logos section with left, center, and right alignment */}
            <div className='container flex flex-col sm:flex-row justify-between items-center mt-5 mb-5 space-y-5 sm:space-y-0'>
                <div className="flex justify-start sm:w-1/3">
                    <a href="https://prototypefund.de/" target="_blank" rel="noopener noreferrer">
                        <img src={prototypefund} alt="Prototype Fund" className='h-16 sm:h-20 rounded hover:shadow-purple-green' />
                    </a>
                </div>
                <div className="flex justify-center sm:w-1/3">
                    <a href="https://okfn.de/" target="_blank" rel="noopener noreferrer">
                        <img src={okfd} alt="Open Knowledge Foundation Germany" className='h-16 sm:h-20 rounded hover:shadow-purple-green' />
                    </a>
                </div>
                <div className="flex justify-end sm:w-1/3">
                    <a href="https://www.bmbf.de/" target="_blank" rel="noopener noreferrer">
                        <img src={bbf} alt="Bundesministerium für Bildung und Forschung" className='h-16 sm:h-20 rounded hover:shadow-purple-green' />
                    </a>
                </div>
            </div>


            {/* hr line for the imprint*/}
            <div className="w-2/3 mx-auto mb-5 h-[2px] bg-gradient-to-r from-transparent via-gray-800 to-transparent dark:via-white"></div>

            {/* Bottom section with copyright and logos */}
            <div className='container flex sm:justify-between justify-center items-center gap-10 max:sm:flex-col'>
                <p className='caption text-n-4 lg:block'>
                    {`© ${new Date().getFullYear()} Ardhi. All rights reserved.`}
                </p>
                <a href="/imprint" className="tagline text-n-4 hover:underline " target="_blank" rel="noopener noreferrer">
                    Imprint
                </a>
            </div>
        </Section>
    )
}

export default Footer;
