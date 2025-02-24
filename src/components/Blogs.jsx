
import React from 'react';
import Section from './Section';

import Heading from './Heading';
import BlogsCard from './BlogsCard';
import { LeftLine, RightLine } from './design/Blogs';
import { sphere, stars } from '../assets';


const Blogs = () => {
    return (
        <Section crosses className="overflow-hidden" id="blogs"  >
            <Heading className='md:max-w-md lg:max-w-4xl'
                title="Our Latest Blog Posts" />
            <div className='container relative z-2'>
                <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                    <img src={sphere}
                        alt="Sphere"
                        className="relative z-1"
                        width={200}
                        height={200} />
                    <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                        <img src={stars} alt="Stars"
                            className='w-full' width={950} height={300} />
                    </div>
                </div>
                <Heading
                    tag="Think, Reflect, Engage: Fresh Content Awaiting You"
                />
                <div className='relative'>
                    <BlogsCard />
                    <LeftLine />
                    <RightLine />

                </div>
            </div>

        </Section>
    )
}

export default Blogs; 