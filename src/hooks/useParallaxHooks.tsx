import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MutableRefObject, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useParallaxHooks = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
  parallaxElRef:
    | MutableRefObject<HTMLDivElement | null>
    | MutableRefObject<(HTMLDivElement | null)[]>
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elRefs = Array.isArray(parallaxElRef.current)
        ? parallaxElRef.current
        : [parallaxElRef.current];

      elRefs.forEach(elRef => {
        gsap.to(elRef, {
          y: elRef?.getAttribute('data-parallax-y') || 0,
          ease: 'none',
          scrollTrigger: {
            trigger: elRef,
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
