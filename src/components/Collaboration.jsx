import React from 'react';
import Section from './Section';
import { collabApps, collabContent, collabText2 } from '../constants';
import { check, favicon } from '../assets';
import Button from './Button';
import { RightCurve, LeftCurve } from './design/Collaboration';

const Collaboration = () => {
  return (
    <Section crosses>
      <div className='container lg:flex'>
        <div className='max-w-[25rem]'>
          <h3 className='h3 mb-4 md:mb-8'>
            GeoApp for Empowering Decision-Makers
          </h3>
          <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item) => (
              <li className='mb-3 py-3' key={item.id}>
                <div className='flex items-center'>
                  <img src={check} width={24} height={24} alt="Check" />
                  <h6 className='body-2 ml-5'> {item.title}</h6>
                </div>

                {item.text && (
                  <p className='body-2 ml-3 text-n-4'> {item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button> <a href='/signup'>Try it now</a> </Button>
        </div>
        <div className='lg:ml-auto xl:w-[38rem] mt-4'>
          <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
            {collabText2}
          </p>

          <div className='relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100'>
            <div className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
              <div className='w-[5rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full '>
                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                  <img
                    src={favicon}
                    alt="Favicon"
                    className="w-full"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 90}`}
                 key={app.id}>
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 90}`}>
                    <img className='m-auto'
                    width={app.width}
                    height={app.height}
                    alt={app.title}
                    src={app.icon} />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve/>
            <RightCurve/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration;
