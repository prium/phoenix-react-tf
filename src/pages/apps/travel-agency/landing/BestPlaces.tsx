import React from 'react';
import bgLeft28 from 'assets/img/bg/bg-left-28.png';
import bgRight28 from 'assets/img/bg/bg-right-28.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faHotel,
  faTreeCity
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Link } from 'react-router-dom';
import thailand from 'assets/img/country/thailand.png';
import switzerland from 'assets/img/country/switzerland.png';
import turkey from 'assets/img/country/turkey.png';
import newZealand from 'assets/img/country/new-zealand.png';
import sweden from 'assets/img/country/sweden.png';
import vietnam from 'assets/img/country/vietnam.png';
import japan from 'assets/img/country/japan.png';
import gallery39 from 'assets/img/gallery/39.png';
import gallery40 from 'assets/img/gallery/40.png';
import gallery41 from 'assets/img/gallery/41.png';
import gallery42 from 'assets/img/gallery/42.png';
import gallery43 from 'assets/img/gallery/43.png';
import gallery44 from 'assets/img/gallery/44.png';
import gallery57 from 'assets/img/gallery/57.png';
import gallery58 from 'assets/img/gallery/58.png';
import { Container } from 'react-bootstrap';

interface placesData {
  country: string;
  flag: string;
  img: string;
  hotels: number;
  packages: number;
}
const placesData: placesData[] = [
  {
    country: 'Thailand',
    flag: thailand,
    img: gallery39,
    hotels: 17,
    packages: 22
  },
  {
    country: 'Switzerland',
    flag: switzerland,
    img: gallery40,
    hotels: 15,
    packages: 24
  },
  {
    country: 'Turkey',
    flag: turkey,
    img: gallery42,
    hotels: 44,
    packages: 123
  },
  {
    country: 'New Zealand',
    flag: newZealand,
    img: gallery41,
    hotels: 55,
    packages: 41
  },
  {
    country: 'Sweden',
    flag: sweden,
    img: gallery43,
    hotels: 17,
    packages: 22
  },
  {
    country: 'Turkey',
    flag: turkey,
    img: gallery44,
    hotels: 44,
    packages: 123
  },
  {
    country: 'Vietnam',
    flag: vietnam,
    img: gallery58,
    hotels: 54,
    packages: 123
  },
  {
    country: 'Japan',
    flag: japan,
    img: gallery57,
    hotels: 17,
    packages: 22
  }
];

const BestPlaces = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section className="pb-10 pt-0">
      <div
        className="bg-holder d-none d-md-block"
        style={{
          backgroundImage: `url(${bgLeft28})`,
          backgroundPosition: 'left 27%',
          backgroundSize: '7%'
        }}
      />
      <div
        className="bg-holder d-none d-md-block"
        style={{
          backgroundImage: `url(${bgRight28})`,
          backgroundPosition: 'right -25px',
          backgroundSize: '16%'
        }}
      />
      <div className="container-medium text-center mb-11 position-relative">
        <h3 className="mb-2 text-body-emphasis">Travel more, spend less</h3>
        <p className="text-body-tertiary mb-0">
          Working with Phoenix means you’ll have all the plans and the perfect
          price list to help you plan.
        </p>
      </div>

      {/* swiper  */}
      <Container fluid className="px-sm-0">
        <div className="swiper-theme-container swiper-slide-nav-top">
          <div className="swiper-nav">
            <div className="swiper-button-next">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-primary"
                transform="shrink-3"
              />
            </div>
            <div className="swiper-button-prev">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-primary"
                transform="shrink-3"
              />
            </div>
          </div>
          <Swiper
            loop
            centeredSlides
            autoplay
            centeredSlidesBounds
            spaceBetween={16}
            slidesPerView={1}
            speed={1500}
            breakpoints={{
              576: {
                slidesPerView: 'auto'
              }
            }}
            wrapperClass="swiper-wrapper"
            className="theme-slider"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[Navigation]}
          >
            {placesData.map((data, index) => (
              <SwiperSlide className="w-sm-auto" key={index}>
                <Link
                  to="#!"
                  className="position-relative rounded-3 overflow-hidden d-block"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="w-100 w-sm-auto object-fit-cover"
                    height={220}
                  />
                  <div className="img-backdrop-faded">
                    <div className="image-reveal-content mb-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <FontAwesomeIcon
                          icon={faHotel}
                          className="text-secondary-lighter"
                        />
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
                          {data.hotels} Hotels
                        </h6>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <FontAwesomeIcon
                          icon={faTreeCity}
                          className="text-secondary-lighter"
                        />
                        <h6 className="mb-0 text-secondary-lighter fw-semibold">
                          {data.packages} Tour Package
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <img src={data.flag} alt="" />
                      <h4 className="mb-0 text-white">{data.country}</h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default BestPlaces;
