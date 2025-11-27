import { useState, useRef } from 'react';
import { albumItems, MediaItem } from 'data/gallery';
import { Col, Dropdown, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faVideo } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  {
    eventKey: '1',
    label: 'All',
    className: 'text-start pe-3'
  },
  {
    eventKey: '2',
    label: 'Image',
    className: 'px-3'
  },
  {
    eventKey: '3',
    label: 'Video',
    className: 'px-3'
  }
];

const AlbumItems = () => {
  const [images, setImages] = useState(albumItems);
  const [selectedCategory, setSelectedCategory] = useState('1');

  const handleNavItemSelect = (category: string | null) => {
    setSelectedCategory(category || '1');
    setImages(
      albumItems.filter(item =>
        category ? item.category.includes(category) : true
      )
    );
  };

  return (
    <>
      <Nav
        className="my-4 gap-0 w-max-content nav-underline"
        defaultActiveKey={navItems[0].eventKey}
        onSelect={handleNavItemSelect}
      >
        {navItems.map(navItem => (
          <Nav.Item key={navItem.eventKey}>
            <Nav.Link
              className={classNames('cursor-pointer', navItem.className)}
              eventKey={navItem.eventKey}
            >
              {navItem.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Row className="g-4">
        {images.map(album => (
          <Col sm={6} md={4} xl={3} key={album.id}>
            <div className="album-item position-relative overflow-hidden">
              <Link to="#!" className="text-decoration-none">
                <div className="photo-stack">
                  {album.media.map(item => (
                    <Media item={item} key={item.id} />
                  ))}
                </div>
                <h4 className="mt-5 title">{album.title}</h4>
                <p className="mb-0 fs-9 text-body">{album.count} items</p>
              </Link>
              <Dropdown className="position-absolute top-0 end-0 mt-3 me-3 z-5">
                <Dropdown.Toggle
                  variant=""
                  size="sm"
                  className="dropdown-caret-none px-3"
                >
                  <FontAwesomeIcon icon={faEllipsisH} />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" className="py-2">
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                  <Dropdown.Item>Download</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AlbumItems;

interface MediaProps {
  item: MediaItem;
}

const Media = ({ item }: MediaProps) => {
  const videoRefs = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    videoRefs.current?.play();
  };

  const handleMouseOut = () => {
    videoRefs.current?.pause();
  };
  return (
    <div
      key={item.id}
      className={classNames('rounded-2 overflow-hidden', item.className)}
    >
      {item.type === 'video' ? (
        <div className="video-container">
          <video
            muted
            ref={videoRefs}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            className="video d-block h-100 w-100 overflow-hidden rounded-2"
            poster={item.poster}
          >
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="video-icon border-0 position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
            <FontAwesomeIcon
              icon={faVideo}
              className="fs-9 fs-sm-8 text-body"
            />
          </div>
        </div>
      ) : (
        <img src={item.src} className="w-100 object-fit-cover" />
      )}
    </div>
  );
};
