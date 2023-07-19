import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { notificationsBreadcrumbItems } from 'data/notifications';
import React from 'react';
import NotificationItem from './NotificationItem';

const Notification = () => {
  return (
    <div>
      <PageBreadcrumb items={notificationsBreadcrumbItems} />
      <h2 className="mb-5">Notifications</h2>
      <h5 className="text-black mb-3 ">Today</h5>
      {/* <div className="mx-4 mx-lg-6 mb-5 border-bottom border-300"></div> */}
      {/* <div className="d-flex align-items-center justify-content-between py-3 border-300 px-lg-6 px-4">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3"></div>
        </div>
      </div> */}
      <NotificationItem />
    </div>
  );
};

export default Notification;
