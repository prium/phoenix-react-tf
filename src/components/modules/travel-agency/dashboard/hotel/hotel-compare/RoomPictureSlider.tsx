import React, { useRef, PropsWithChildren } from 'react';
import { Swiper, SwiperProps as ReactSwiperProps } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

interface SwiperProps extends ReactSwiperProps {
  classNames?: string;
}

const RoomPictureSlider = ({
  classNames,
  children,
  ...props
}: PropsWithChildren<SwiperProps>) => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);
  return (
    <div className={`swiper-theme-container ${classNames}`}>
      <Swiper
        loop={true}
        grabCursor={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        modules={[Navigation]}
        onBeforeInit={swiper => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
          }
        }}
        {...props}
        className="theme-slider"
      >
        {children}
      </Swiper>
      <div className="swiper-nav swiper-nav-inside">
        <button className="swiper-button-next" ref={navigationNextRef}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button className="swiper-button-prev" ref={navigationPrevRef}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
    </div>
  );
};

export default RoomPictureSlider;
