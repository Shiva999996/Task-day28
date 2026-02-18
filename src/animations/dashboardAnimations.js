import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initDashboardAnimations = (container) => {
  const ctx = gsap.context(() => {

   
    // Intro Timeline
          
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    tl.from(".hero-section", {
      y: 80,
      opacity: 0,
      duration: 1
    })
    .from(".products-section", {
      y: 40,
      opacity: 0,
      duration: 0.6
    }, "-=0.4")
    .from(".recommended-section", {
      y: 40,
      opacity: 0,
      duration: 0.6
    }, "-=0.4");
    
    
    // Scroll Animation
  
    gsap.from(".personalized-section", {
      scrollTrigger: {
        trigger: ".personalized-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      duration: 0.8
    });

     gsap.from(".footer-section", {
      scrollTrigger: {
        trigger: ".personalized-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      duration: 0.8
    });
   
  }, container);

  return ctx;
};



