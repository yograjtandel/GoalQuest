import React, { useContext } from 'react';
import Notificationpill from './NotificationPill';
import NotificationWraper from './NotificationWraper';
import NotificationContext from '@/src/store/context/Notification';

const Notification = () => {
  const NotificationCtx = useContext(NotificationContext);
  const list = NotificationCtx.Notifications.map((item) => (
    <Notificationpill status={item.type} msg={item.msg} key={item.id} />
  ));
  return <NotificationWraper>{list}</NotificationWraper>;
};

export default Notification;
