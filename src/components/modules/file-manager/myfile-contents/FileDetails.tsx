import React from 'react';
import lightImg from 'assets/img/spot-illustrations/46.png';
import darkImg from 'assets/img/spot-illustrations/dark_46.png';
import { Nav, Tab, Table } from 'react-bootstrap';
import AvatarDropdown from 'components/common/AvatarDropdown';
import Avatar from 'components/base/Avatar';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons';
import FileManagerTimeline from 'components/timelines/FileManagerTimeline';
import RenderFileIcon from './RenderFileIcon';
import { useFileManagerContext } from 'providers/FileManagerProvider';

const FileDetails = () => {
  const { fileCollection, checkedFileIds } = useFileManagerContext();
  const data = fileCollection.find(file => file.id === checkedFileIds[0]);

  return (
    <div className="file-details">
      {checkedFileIds.length !== 1 && (
        <div className="text-center px-4">
          {checkedFileIds.length > 1 && (
            <h5 className="mb-3">{checkedFileIds.length} items selected</h5>
          )}
          <img src={lightImg} alt="" className="d-dark-none img-fluid" />
          <img src={darkImg} alt="" className="d-light-none img-fluid" />
          {checkedFileIds.length < 1 && (
            <h5 className="mt-4">Select an item to view more information</h5>
          )}
        </div>
      )}
      {checkedFileIds.length == 1 && data && (
        <div>
          <h3>{data.name}</h3>
          <Tab.Container id="file-details-tab" defaultActiveKey="first">
            <Nav
              variant="underline"
              className="border-bottom border-translucent mt-4 mb-5 gap-0"
            >
              <Nav.Item className="w-50 text-center">
                <Nav.Link eventKey="first">File Details</Nav.Link>
              </Nav.Item>
              <Nav.Item className="w-50 text-center">
                <Nav.Link eventKey="second">File Activity</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <RenderFileIcon file={data} />
                <Table borderless>
                  <thead>
                    <th className="p-0" style={{ width: '110px' }} />
                    <th className="p-0 text-center" style={{ width: '20px' }} />
                    <th className="p-0" />
                  </thead>
                  <tbody>
                    {data.details.map((item, index) => (
                      <tr key={index}>
                        <td className="py-1 align-middle">
                          <h5 className="mb-0">{item.key}</h5>
                        </td>
                        <td className="py-1 align-middle">:</td>
                        <td className="py-1 align-middle">
                          {item.value}
                          {item.modifiedBy && (
                            <>
                              by{' '}
                              <a className="fs-9 fw-bolder" href="#!">
                                John Doe
                              </a>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <hr className="mb-4" />
                <h5 className="mb-3">Admin</h5>
                <AvatarDropdown
                  user={{
                    ...data.admin,
                    id: 1,
                    username: '',
                    connections: 23,
                    mutual: 4
                  }}
                  size="m"
                />
                <h5 className="mb-3 mt-5">Team members</h5>
                <Avatar.Group size="m">
                  {data.assignees.map(member => (
                    <AvatarDropdown
                      key=""
                      user={{
                        ...member,
                        id: 1,
                        username: '',
                        connections: 23,
                        mutual: 4
                      }}
                      size="m"
                    />
                  ))}
                </Avatar.Group>
                <Button variant="link" className="p-0">
                  Control Access
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ms-2 mt-2 fs-10"
                  />
                </Button>
                <hr className="my-4" />
                <h5 className="mb-3 mb-3">File Link</h5>
                <h6 className="fw-normal text-body">{data.fileLink}</h6>
                <Button variant="phoenix-primary" className="mt-2">
                  <FontAwesomeIcon icon={faLink} className="me-2" />
                  Copy Link
                </Button>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h4 className="mb-3">Today</h4>
                <FileManagerTimeline data={data.activities} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      )}
    </div>
  );
};

export default FileDetails;
