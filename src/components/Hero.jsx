import React from "react";
import { ScrollParallax } from "react-just-parallax";
//import { useRef } from "react";

import Section from "./Section";
import { curve, heroBackground, sat_img } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";




const Hero = () => {

    const parallaxRef = React.useRef(null);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffSet="lg:translate-y-[5.25rem]"
            customPaddingso
            id="about">

            <div className="container relative" ref={parallaxRef}>
                <div
                    className="relative z-1 max-w-[62rem] mx-auto text-center 
                    mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                        Turn URLs & Cloud Model Results into Smart Maps with &nbsp;
                        <span className="inline-block relative">
                            Ardhi{" "}
                            <img src={curve}
                                alt="Curve"
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Turn geospatial results from Python model from cloud and Geodata URLs into interactive maps effortlessly.<br /> <br />

                      Empower teams to democratize data insights – let non-technical stakeholders explore, understand,
                    and act on spatial results without code. 
                       {/*  Simplify decisions with clarity, straight from the cloud. */}
                    </p>
                    <Button white>
                        <a href="https://ardhi-app.netlify.app/signup" target="_blank" rel="noopener noreferrer"> Get Started</a>
                    </Button>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490]
                                lg:aspect-[1024/720]">
                                <img
                                    src={sat_img}
                                    alt="Satimg"
                                    className="w-full"
                                    width={1024}
                                    height={490}
                                />
                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                        {heroIcons.map((icon, index) => (
                                            <li className="p-5" key={index}>
                                                <img src={icon} width={24} height={25} alt={icon} />
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax >

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification
                                        className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                        title="GeoAnalytics"
                                    />
                                </ScrollParallax>


                            </div>
                        </div>

                        <Gradient />
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2
                        md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            alt="hero"
                            className="w-full"
                            width={1440}
                            height={1800}
                        />
                    </div>
                    <BackgroundCircles />
                </div>

                <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />

            </div>
            <BottomLine />
        </Section>

    );

};

export default Hero;
