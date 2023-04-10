import EcomCategoryNavs from 'components/navs/EcomCategoryNavs';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import EcomWhopingBanner from 'components/banners/EcomWhopingBanner';
import EcomGiftItemsBanner from 'components/banners/EcomGiftItemsBanner';
import EcomBestInMarketBanner from 'components/banners/EcomBestInMarketBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { products } from 'data/ecommerce';
import Product from 'components/common/Product';
import Swiper from 'components/base/Swiper';
import { SwiperSlide } from 'swiper/react';

const Homepage = () => {
  return (
    <div className="ecommerce-homepage pt-5 mb-9">
      <section className="py-0">
        <div className="container-small">
          <EcomCategoryNavs />
        </div>
      </section>
      <section className="py-0 px-xl-3">
        <Container className="px-xl-0 px-xxl-3">
          <Row className="g-3 mb-9">
            <Col xs={12}>
              <EcomWhopingBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomGiftItemsBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomBestInMarketBanner />
            </Col>
          </Row>
          <Row className="g-4 mb-6">
            <Col xs={12} lg={9} xxl={10}>
              <div className="d-flex flex-between-center mb-3">
                <div className="d-flex">
                  <FontAwesomeIcon icon="bolt" className="text-warning fs-6" />
                  <h3 className="mx-2">Top Deals today</h3>
                  <FontAwesomeIcon icon="bolt" className="text-warning fs-6" />
                </div>
                <Link to="#!" className="btn btn-link btn-lg p-0 d-none d-md-block">
                  Explore more
                  <FontAwesomeIcon icon="chevron-right" className="fs-9 ms-1" />
                </Link>
              </div>
              <Swiper
                options={{
                  slidesPerView: 1,
                  spaceBetween: 16,
                  breakpoints: {
                    450: {
                      slidesPerView: 2,
                      spaceBetween: 16
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 16
                    },
                    1540: {
                      slidesPerView: 5,
                      spaceBetween: 16
                    }
                  }
                }}
              >
                {products.map(product => (
                  <SwiperSlide key={product.id}>
                    <Product product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
