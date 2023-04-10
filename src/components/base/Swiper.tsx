import { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SwiperProps {
  options: SwiperOptions;
}

const Swiper = ({ children, options }: PropsWithChildren<SwiperProps>) => {
  return (
    <div className="swiper-theme-container">
      <button className="swiper-button-next">
        <FontAwesomeIcon icon="chevron-right" />
      </button>
      <button className="swiper-button-prev">
        <FontAwesomeIcon icon="chevron-left" />
      </button>
      <ReactSwiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled'
        }}
        {...options}
      >
        {children}
      </ReactSwiper>
    </div>
  );
};

export default Swiper;
