import SocialProfileCard from 'components/cards/SocialProfileCard';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import ProfileNavigationTwo from 'components/modules/social/ProfileNavigationTwo';
import SocialPhotos from 'components/image-gallery/SocialPhotos';
import SocialPosts from 'components/modules/social/SocialPosts';
import { dropdownData, profileNavigationData } from 'data/social/dropdownData';
import { profilePostData } from 'data/social/postsData';
import { Col, Row } from 'react-bootstrap';
import ProfileNavigation from 'components/list-items/ProfileNavigation';

const SocialProfile = () => {
  return (
    <>
      <div className="mb-9">
        <SocialProfileCard data={dropdownData} />
        <Row className="gy-3 gx-5 gx-xxl-6">
          <Col xl={4} className="d-none d-xl-block">
            <ProfileNavigation data={dropdownData} className="mb-8" />
            <SocialPhotos className="mb-8" />
            <ProfileNavigationTwo data={profileNavigationData} />
          </Col>
          <Col xl={8}>
            <SocialPosts data={profilePostData} />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="profile" className="d-xl-none" />
    </>
  );
};

export default SocialProfile;
