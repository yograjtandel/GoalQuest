import React, { useContext } from 'react';
import Notificationpill from './NotificationPill';
import NotificationWraper from './NotificationWraper';
import NotificationContext from '@/src/store/context/Notification';
import { useDispatch } from 'react-redux';

const Notification = () => {
  const NotificationCtx = useContext(NotificationContext);
  const dispatch = useDispatch();
  const list = NotificationCtx.Notifications.map((item) => (
    <Notificationpill status={item.type} msg={item.msg} key={item.id} />
  ));
  return <NotificationWraper>{list}</NotificationWraper>;
};

export default Notification;
