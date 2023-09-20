import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, Tab } from 'react-bootstrap';
import DealDetailsActivity from './DealDetailsActivity';
import {
  dealActivities,
  dealNotes,
  meetingData,
  taskList
} from 'data/crm/dealDetailsData';
import DealDetailsNotes from './DealDetailsNotes';
import DealDetailsMeeting from './DealDetailsMeeting';
import DealDetailsTask from './DealDetailsTask';
import DealDetailsCall from './DealDetailsCall';
import DealDetailsAttachments from './DealDetailsAttachments';
import { attachments } from 'data/project-management/todoListData';
import LeadEmails from '../LeadEmails';

interface TabItem {
  name: string;
  icon: IconProp;
  content: JSX.Element;
}

const tabitems: TabItem[] = [
  {
    name: 'Activity',
    icon: 'chart-line',
    content: <DealDetailsActivity activities={dealActivities} />
  },
  {
    name: 'Notes',
    icon: 'clipboard',
    content: <DealDetailsNotes notes={dealNotes} />
  },
  {
    name: 'Meeting',
    icon: 'video',
    content: <DealDetailsMeeting meetings={meetingData} />
  },
  {
    name: 'Task',
    icon: 'square-check',
    content: <DealDetailsTask tasks={taskList} />
  },
  {
    name: 'Call',
    icon: 'phone',
    content: <DealDetailsCall />
  },
  {
    name: 'Emails',
    icon: 'envelope',
    content: <LeadEmails />
  },
  {
    name: 'Attachments',
    icon: 'paperclip',
    content: <DealDetailsAttachments attachments={attachments} />
  }
];

const DealDetailsTab = () => {
  return (
    <Tab.Container defaultActiveKey="activity">
      <Nav
        variant="underline"
        className="deal-details scrollbar flex-nowrap w-100 pb-1 mb-6"
      >
        {tabitems.map(item => (
          <Nav.Item key={item.name} className="me-2 text-nowrap">
            <Nav.Link eventKey={item.name.toLowerCase()}>
              <FontAwesomeIcon
                icon={item.icon}
                className="me-2 tab-icon-color"
              />
              {item.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content>
        {tabitems.map(item => (
          <Tab.Pane key={item.name} eventKey={item.name.toLowerCase()}>
            {item.content}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default DealDetailsTab;
