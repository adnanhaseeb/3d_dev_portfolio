import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import Particles from "../components/models/hero_models/Particles";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(
      ".profile-img",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      {/* Particles behind profile image */}
      <div className="absolute md:right-0 right-0 top-0 h-full md:w-1/2 w-full z-10 pointer-events-none">
        <Canvas>
          <Suspense fallback={null}>
            <Particles count={100} />
          </Suspense>
        </Canvas>
      </div>

      {/* Hero content */}
      <div className="hero-layout relative z-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:px-20 px-5 w-full">
          
          {/* LEFT: Text Content */}
          <header className="flex flex-col justify-center md:w-2/3 w-full gap-7 md:pr-10">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="icon"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl pointer-events-none">
              Hi, I’m Adnan, web and app developer with a passion for code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </header>

          {/* RIGHT: Profile Image */}
          <div className="md:w-1/3 w-full flex justify-center md:pl-10 mb-10 md:mb-0 relative z-20">
            <img
              src="/images/adnan.jpeg"
              alt="Adnan"
              className="profile-img rounded-full border-4 border-white shadow-xl object-cover w-56 h-56 md:w-72 md:h-72"
            />
          </div>
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
