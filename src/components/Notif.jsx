import "../styles/Notif.css";

function Notif(props) {
  return (
    <div className="notif-card">
      <img src={require(`../images/brand-logo.png`)} alt="notif icon" />
      <div className="notif-details">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
      <img
        className="delete-btn"
        src={require(`../images/brand-logo.png`)}
        alt="Remove notification"
        onClick={(event) => props.deleteNotif(event, props.id)}
      />
    </div>
  );
}

export default Notif;
