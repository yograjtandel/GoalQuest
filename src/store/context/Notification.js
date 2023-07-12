import { useState, createContext } from "react";

const NotificationContext = createContext({
  Notifications: [],
  IsLoading: false,
  addNotifications: () => {},
});

export const NotificationContextProvider = (props) => {
  const [Notifications, setNotifications] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  const addNotifications = (notifications) => {
    setNotifications((prev) => [...prev, ...notifications]);
  };

  const setLoadingState = () => {
    setIsLoading((prev) => !prev);
  };

  return (
    <NotificationContext.Provider
      value={{
        IsLoading,
        Notifications,
        addNotifications,
        setLoadingState,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
