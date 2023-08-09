import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useParallaxHooks = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
  parallaxElRef:
    | MutableRefObject<HTMLDivElement | null>
    | MutableRefObject<HTMLDivElement | null>[]
) => {
  console.log({ containerRef: Array.isArray(parallaxElRef) });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elRefs = Array.isArray(parallaxElRef)
        ? parallaxElRef
        : [parallaxElRef];
      elRefs.forEach(elRef => {
        gsap.to(elRef.current, {
          y: elRef.current?.getAttribute('data-parallax-y') || 0,
          ease: 'none',
          scrollTrigger: {
            trigger: elRef.current,
            scrub: true,
            start: 'top bottom',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, containerRef); //
    return () => ctx.revert();
  }, []);
};

export default useParallaxHooks;
