import "../styles/Notif.css";

function Notif(props) {
  return (
    <div className="notif-card">
      <img
        className="notif-icon"
        src={require(`../images/circle-check.png`)}
        alt="notif icon"
      />
      <div className="notif-details">
        <h1 className="notif-title">{props.title}</h1>
        <p className="notif-desc">{props.desc}</p>
      </div>
      <img
        className="delete-btn"
        src={require(`../images/close-icon.png`)}
        alt="Remove notification"
        onClick={(event) => props.deleteNotif(event, props.id)}
      />
    </div>
  );
}

export default Notif;
