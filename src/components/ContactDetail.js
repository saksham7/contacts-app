import { Link } from "react-router-dom";
import user from "../images/user-avatar.png";
const ContactDetail = (props) => {
  const { name, mobile } = props.location.state.contact;
  return (
    <div className="ui main">
      <div className=" ui card centered">
        <img src={user} alt="User Image" className="image"></img>
        <div className="content">
          <div className="header">{name}</div>
          <p className="description">{mobile}</p>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
