import React, { Fragment, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transform, setTransform] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / width;
    const tiltX = (relativeY - 0.5) * 25;
    const tiltY = (relativeX - 0.5) * -25;
    const newTransition = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`;
    setTransform(newTransition);
  };

  const handleMouseLeave = (e) => {
    setTransform("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transform }}>
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 w-full h-full object-cover object-center"
      />
      <div className="relative z-10 flex w-full h-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <Fragment>
      <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
          <div className="px-5 py-32">
            <p className="font-circular-web text-lg text-blue-50">
              Into The Meta Game Layer
            </p>
            <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
              Welcome to the future of gaming where the boundaries between
              reality and the virtual world blur. Our platform offers an
              immersive experience that integrates cutting-edge technology with
              innovative gameplay. Join us as we explore new dimensions and
              redefine the gaming landscape.
            </p>
          </div>
          <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
            <BentoCard
              src="videos/feature-1.mp4"
              title={
                <>
                  radie<b>n</b>t
                </>
              }
              description="Experience the brilliance of our radiant feature,
                    showcasing the pinnacle of our technological advancements
                    and innovative gameplay."
            />
          </BentoTilt>
          <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 ">
            <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                src="videos/feature-2.mp4"
                title={
                  <>
                    Zig<b>m</b>a
                  </>
                }
                description="Discover the power of Zigma, where precision meets performance,
                             delivering an unparalleled gaming 
                             experience that pushes the boundaries of what's possible."
              />
            </BentoTilt>
            <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
              <BentoCard
                src="videos/feature-3.mp4"
                title={
                  <>
                    N<b>e</b>xus
                  </>
                }
                description="Step into the Nexus, a central hub of connectivity and innovation,
                            where every interaction is designed to enhance your gaming journey."
              />
            </BentoTilt>
            <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
              <BentoCard
                src="videos/feature-4.mp4"
                title={
                  <>
                    Az<b>u</b>l
                  </>
                }
                description=" Dive into Azul, a realm of tranquility and strategy,
                             where every move is a step towards mastering the art of immersive gameplay."
              />
            </BentoTilt>
            <div className="bento-tilt_2">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64 text-black">
                  M<b>o</b>re Co<b>m</b>ing S<b>o</b>on!
                </h1>
                <TiLocationArrow className="m-5 scale-[5] self-end" />
              </div>
            </div>
            <BentoTilt className="bento-tilt_2 ">
              <video
                src="/videos/feature-5.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
              />
            </BentoTilt>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
