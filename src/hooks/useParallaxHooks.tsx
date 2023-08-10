import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { parseData } from 'helpers/utils';
import merge from 'lodash.merge';
import { MutableRefObject, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useParallaxHooks = (
  containerRef: MutableRefObject<HTMLDivElement | null>,
  parallaxElRef:
    | MutableRefObject<HTMLDivElement | null>
    | MutableRefObject<(HTMLDivElement | HTMLImageElement | null)[]>
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elRefs = Array.isArray(parallaxElRef.current)
        ? parallaxElRef.current
        : [parallaxElRef.current];

      elRefs.forEach(elRef => {
        const elOptions = parseData(elRef?.getAttribute('data-parallax') || '');
        const options = merge(
          {
            ease: 'none',
            scrollTrigger: {
              trigger: elRef,
              scrub: true,
              start: 'top bottom',
              toggleActions: 'play none none reverse'
            }
          },
          elOptions
        );
        gsap.to(elRef, options);
      });
    }, containerRef); //
    return () => ctx.revert();
  }, []);
};

export default useParallaxHooks;
