import SettingsProfileCard from 'components/cards/ProfileCardSmall';
import Events from 'components/modules/events/Events';
import FeedTextarea from 'components/modules/social/FeedTextarea';
import NavbarBottom from 'components/modules/social/NavbarBottom';
import ProfileNavigation from 'components/modules/social/ProfileNavigation';
import SocialMessages from 'components/modules/social/SocialMessages';
import SocialPhotos from 'components/modules/social/SocialPhotos';
import SocialPosts from 'components/modules/social/SocialPosts';
import { eventsData } from 'data/eventsData';
import { dropdownData } from 'data/social/dropdownData';
import { messages } from 'data/social/messages';
import { feedPostData } from 'data/social/postsData';
import { Col, Row } from 'react-bootstrap';

const Feed = () => {
  return (
    <>
      <div className="mb-9">
        <Row className="gy-3 gx-5 gx-xxl-6">
          <Col lg={5} xl={4} className="d-none d-lg-block">
            <SettingsProfileCard showAbout={true} />
            <ProfileNavigation data={dropdownData} />
            <div className="mb-8 mt-6">
              <SocialMessages messages={messages} />
            </div>
            <div className="mb-8">
              <SocialPhotos />
            </div>
            <Events data={eventsData} title="Events" />
          </Col>
          <Col lg={7} xl={8}>
            <FeedTextarea />
            <SocialPosts data={feedPostData} />
          </Col>
        </Row>
      </div>
      <NavbarBottom active="home" className="d-lg-none" />
    </>
  );
};

export default Feed;
