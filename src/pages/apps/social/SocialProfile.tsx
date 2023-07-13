import Button from 'components/base/Button';
import SocialProfileCard from 'components/cards/SocialProfileCard';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import ProfileNavigation from 'components/modules/social/ProfileNavigation';
import ProfileNavigationTwo from 'components/modules/social/ProfileNavigationTwo';
import SocialPhotos from 'components/modules/social/SocialPhotos';
import SocialPosts from 'components/modules/social/SocialPosts';
import { dropdownData, profileNavigationData } from 'data/social/dropdownData';
import { profilePostData } from 'data/social/postsData';
import { Col, Row } from 'react-bootstrap';

const SocialProfile = () => {
  return (
    <>
      <div className="mb-9">
        <SocialProfileCard data={dropdownData} />
        <Row className="gy-3 gx-5 gx-xxl-6">
          <Col xl={4} className="d-none d-xl-block">
            <div className="mb-8">
              <ProfileNavigation data={dropdownData} />
            </div>
            <div className="mb-8">
              <SocialPhotos />
            </div>
            <ProfileNavigationTwo data={profileNavigationData} />
          </Col>
          <Col xl={8}>
            <div className="mb-9">
              <SocialPosts data={profilePostData} />
            </div>
            <div className="text-center">
              <Button variant="link" className="fs-8 p-0">
                Load more
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <NavbarBottom active="profile" />
    </>
  );
};

export default SocialProfile;
