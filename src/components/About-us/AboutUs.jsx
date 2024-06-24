import React, { useRef, useEffect } from "react";
import useIntersectionObserver from "../useIntersectionObserver";
import "./AboutUs.css";

const Section = ({ children, className }) => {
  const sectionRef = useRef(null);
  const [setObserverEntry, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (sectionRef.current) {
      setObserverEntry({ target: sectionRef.current });
    }
  }, [setObserverEntry]);

  return (
    <div
      ref={sectionRef}
      className={`${className} section ${isIntersecting ? "visible" : "hidden"}`}
    >
      {children}
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us" id="About">
      <Section className="display">
        <div className="circles">
          <div className="circle2"></div>
          <div className="circle2"></div>
        </div>
        <div className="different">
          <h1 className="h1-dif">What makes us different?</h1>
          <p className="p-dif">
            We are a global Marketing and digital transformation champion that supports
            our customers in realizing technology’s huge potential for a smarter
            and more sustainable world. We’ve united creativity and innovation
            with the instant impact and execution power of a large social media and digital marketing solution
            provider. Customer experience is the new battleground and Stratos Media
            is your partner to master the challenge. Our Leadership is a
            value-driven team of creatives. They work to make a difference.
          </p>
        </div>
        <Section className="animation-container">
          <div className="circle"></div>
          <div className="rectangle"></div>
          <div className="animacion"></div>
          <div className="message">Boost Your Digital Marketing!</div>
        </Section>
      </Section>
    </div>
  );
};

export default AboutUs;
