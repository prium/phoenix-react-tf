import { Navigation, SwiperOptions } from 'swiper';
import { Swiper as ReactSwiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { PropsWithChildren, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationOptions } from 'swiper/types';

const Swiper = ({ children, ...rest }: PropsWithChildren<SwiperOptions>) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="swiper-theme-container">
      <button className="swiper-button-next" ref={navigationNextRef}>
        <FontAwesomeIcon icon="chevron-right" />
      </button>
      <button className="swiper-button-prev" ref={navigationPrevRef}>
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <ReactSwiper
        modules={[Navigation]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          disabledClass: 'swiper-button-disabled'
        }}
        onBeforeInit={swiper => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
          }
        }}
        {...rest}
      >
        {children}
      </ReactSwiper>
    </div>
  );
};

export default Swiper;
