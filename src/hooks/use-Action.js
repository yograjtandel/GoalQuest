import { v4 as uuidv4 } from 'uuid';
import NotificationContext from '../store/context/Notification';
import action from '../utility/action';

const { useState, useContext } = require('react');

const useAction = () => {
  const [Response, SetResponse] = useState(null);
  const [Error, SetError] = useState(null);
  const NotificationCtx = useContext(NotificationContext);
  const Action = async (args) => {
    // NotificationCtx.addNotifications([
    //   {
    //     msg: 'Something went wrong!',
    //     id: uuidv4(),
    //     type: 'error',
    //   },
    // ]);

    const res = await action(args);
    if (res.data.error) {
      SetError(res.data.error);
      NotificationCtx.addNotifications([
        {
          msg: 'Something went wrong!',
          id: uuidv4(),
          type: 'error',
        },
      ]);
      return;
    }
    SetResponse(res);
  };
  return {
    Action,
    Response,
    Error,
  };
};

export default useAction;
