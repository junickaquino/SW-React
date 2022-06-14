import "../styles/Notifications.css";
import Notif from "./Notif";
import React from "react";

function Notifications(props) {
  const dataArr = props.notifsData.d;

  // Get the first 4 notifications
  const firstFourNotifs = dataArr.slice(0, 4);

  const [notifList, setNotifList] = React.useState(firstFourNotifs);
  console.log(notifList);

  const dataNotifs = notifList.map((item) => {
    return (
      <Notif
        key={notifList.indexOf(item)}
        title={item.title}
        desc={item.description}
        id={notifList.indexOf(item)}
        deleteNotif={deleteNotif}
      />
    );
  });

  function deleteNotif(event, id) {
    console.log("Delete!", id);
    event.stopPropagation();
    setNotifList((prevNotif) => {
      return prevNotif.filter((notif) => notifList.indexOf(notif) !== id);
    });
  }

  return <div className="notifs-container">{dataNotifs}</div>;
}

export default Notifications;
