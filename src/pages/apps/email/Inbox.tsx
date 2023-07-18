import EmailLayout from 'layouts/EmailLayout';
import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import InboxToolbar from './InboxToolbar';
import { emails } from 'data/email';
import EmailRow from './EmailRow';
import { useMainLayoutContext } from 'providers/MainLayoutProvider';

const Inbox = () => {
  const { setContentClass } = useMainLayoutContext();

  useEffect(() => {
    setContentClass('pt-0');

    return () => {
      setContentClass('');
    };
  }, []);
  return (
    <EmailLayout>
      <Col xs={12} lg>
        <div className="px-lg-1">
          <InboxToolbar />
          {emails.map(email => (
            <EmailRow email={email} key={email.id} />
          ))}
        </div>
      </Col>
    </EmailLayout>
  );
};

export default Inbox;
