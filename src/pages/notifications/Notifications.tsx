import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { notificationsBreadcrumbItems } from 'data/notifications';
import React from 'react';

const Notification = () => {
  return (
    <div>
      <PageBreadcrumb items={notificationsBreadcrumbItems} />
      <h2 className="mb-5">Notifications</h2>
      <h5 className="text-black mb-3 ">Today</h5>
      <div className="mx-4 mx-lg-6 mb-5 border-bottom border-300"></div>
      <div className="d-flex align-items-center justify-content-between py-3 border-300 px-lg-6 px-4">
        <div className="d-flex">
          <div className="avatar avatar-xl me-3"></div>
        </div>
      </div>
      {/* mixin NotificationItem(info)
      .d-flex.align-items-center.justify-content-between.py-3.border-300.px-lg-6.px-4.notification-card.border-top(class=info.read ? 'read' : 'unread' )
        div.d-flex
          .avatar.avatar-xl.me-3
            if info.avatar
              img.rounded-circle(src=`${CWD}assets/img/${info.avatar}`, alt="" class=info.avatarPlaceholder ? 'avatar-placeholder' : '')
            else
              .avatar-name.rounded-circle
                span=info.name.charAt(0).toUpperCase()
          .me-3.flex-1.mt-2
            h4.fs--1.text-black=info.name
            p.fs--1.text-1000!=info.text
              span.fw-bold=info.textBold
              span.ms-2.text-600.fw-bold.fs--2=info.ago
            p.text-800.fs--1.mb-0
              span.me-1(class=`${info.icon}`)
              span.fw-bold=info.time 
              | #{info.date}
        .font-sans-serif
          button.btn.fs--2.btn-sm.dropdown-toggle.dropdown-caret-none.transition-none.notification-dropdown-toggle(type='button' data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent")
            span.fas.fa-ellipsis-h.fs--2.text-900
          .dropdown-menu.dropdown-menu-end.py-2(aria-labelledby=id )
            a(href='#!').dropdown-item Mark as unread */}
    </div>
  );
};

// h5.text-black.mb-3 Today
//   .mx-n4.mx-lg-n6.mb-5.border-bottom.border-300
//     each item in today
//       +NotificationItem(item)
//   h5.text-semi-bold.text-black.mb-3 Yesterday
//   .mx-n4.mx-lg-n6.mb-9.border-bottom.border-300
//     each item in yesterday
//       +NotificationItem(item)

export default Notification;
