import React from 'react';
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
    return (
            <div className={className}>
                <h5 className='tagline mb-6 text-center text-n-1/50 leading-7'>
                Visualize geospatial results from Python scripts and data running on <u>cloud platform</u> and turn them into 
                intuitive maps instantly. Ardhi bridges the gap between code and collaboration – Connect to your cloud platform!
                </h5>
                <ul className="flex">
                    {companyLogos.map((logo, index) => (
                        <li className='flex items-center justify-center flex-1 h-[8.5rem]'
                        key={index}>
                            <img 
                            src={logo} 
                            alt="Company logo"
                            width={134}
                            height={28}
                            />
                        </li>
                    ))}

                </ul>
            </div>
    )

}

export default CompanyLogos;