import React, { Fragment, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;

    gsap.to(element, {
      duration: 0.2,
      rotateX,
      rotateY,
      transformPerspective: 500, // gives the 3D effect
      ease: "power2.inOut",
    });
  };

  return (
    <Fragment>
      <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24 ">
          <p className="font-general text-sm uppercase md:text-[10px]">
            This is the tale of their greatest quest
          </p>
          <div className="relative size-full ">
            <AnimatedTitle
              title="The St<b>o</b>ry Of<br/> a Hidden Real<b>m</b>"
              swctionId="#story"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />
            <div className="story-img-container ">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    src="/img/entrance.webp"
                    alt="entrance"
                    className="object-contain"
                    ref={frameRef}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                  />
                </div>
              </div>
              <RoundedCorners />
            </div>
          </div>

          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                Embark on a journey through the mystical lands, where every
                corner holds a secret, and every step brings you closer to the
                hidden realm. Discover the magic that lies within and become a
                part of the legend.
              </p>

              <Button
              id="realm-button"
              title="discover prologue"
              containerClass="mt-5 bg-white rounded-full"
               />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Story;
