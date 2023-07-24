import SocialProfileCard from 'components/cards/SocialProfileCard';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import MutualNavigation from 'components/list-items/MutualNavigation';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import SocialPosts from 'components/modules/social/SocialPosts';
import { profilePostData } from 'data/social/postsData';
import { Col, Row } from 'react-bootstrap';
import ProfileNavigation from 'components/list-items/ProfileNavigation';

const SocialProfile = () => {
  return (
    <>
      <div className="mb-9">
        <SocialProfileCard />
        <Row className="gy-3 gx-5 gx-xxl-6">
          <Col xl={4} className="d-none d-xl-block">
            <ProfileNavigation className="mb-8" />
            <SocialPhotos className="mb-8" />
            <MutualNavigation />
          </Col>
          <Col xl={8}>
            <SocialPosts posts={profilePostData} />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="profile" className="d-xl-none" />
    </>
  );
};

export default SocialProfile;
