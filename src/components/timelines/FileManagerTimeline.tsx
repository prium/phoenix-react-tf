import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from 'components/base/Avatar';
import Timeline from 'components/base/Timeline';
import AvatarDropdown from 'components/common/AvatarDropdown';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Activity {
  time: string;
  icon: IconDefinition;
  iconColor: string;
  title: string;
  tasker: string;
  assignees?: { name: string; avatar: string }[];
  more?: string;
}

const FileManagerTimeline = ({ data }: { data: Activity[] }) => {
  return (
    <Timeline variant="basic">
      {data.map((item, index) => (
        <Timeline.Item className="position-relative" key={index}>
          <Row className="g-3">
            <Col xs="auto">
              <Timeline.Separator className="position-relative">
                <Timeline.Dot className="icon-item-md rounded-7 border border-translucent">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-${item.iconColor} fs-9`}
                  />
                </Timeline.Dot>
                {index !== data.length - 1 && (
                  <Timeline.Bar className="h-100 border-dashed" />
                )}
              </Timeline.Separator>
            </Col>
            <Col className="mb-5">
              <Timeline.Content>
                <div className="d-flex justify-content-between mb-2">
                  <h6 className="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">
                    {item.title}
                  </h6>
                  <p className="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time">
                    <FontAwesomeIcon icon={faClock} className="me-1" />{' '}
                    {item.time}
                  </p>
                </div>
                {item.assignees && (
                  <Avatar.Group size="m">
                    {item.assignees.map((member, index) => (
                      <AvatarDropdown
                        key={index}
                        user={{
                          ...member,
                          id: index,
                          username: '',
                          connections: 23,
                          mutual: 4
                        }}
                        size="m"
                      />
                    ))}
                  </Avatar.Group>
                )}
                <p className="fs-9">
                  by{' '}
                  <Link className="fw-semibold" to="#!">
                    {item.tasker}
                  </Link>
                </p>
              </Timeline.Content>
            </Col>
          </Row>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default FileManagerTimeline;
