import avatar from "./images/avatar.jpg";
import shareBtn from "./images/avatar share btn.png";

const Profile = () => {
  return (
    <div className="ProfileSection">
      <img id="profile__img" src={avatar} alt="avatar" />
      <h2 id="slack"> John Kratos </h2>
      <h2 id="twitter"> @JohnAyo72850989 </h2>
      <img id="shareBtn" src={shareBtn} alt="avatar share btn" />
    </div>
  );
};

export default Profile;
