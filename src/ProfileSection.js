import avatar from "./images/avatar.jpg";
import shareBtn from "./images/avatar share btn.png";
import shareMobBtn from "./images/avatar share_mob btn.png";

const Profile = () => {
  return (
    <div className="ProfileSection">
      <img id="profile__img" src={avatar} alt="avatar" />
      <h2 id="slack"> John Ayomide </h2>
      <img id="shareBtn" src={shareBtn} alt="avatar share btn" />
      <img id="shareMobBtn" src={shareMobBtn} alt="avatar share_mob btn" />
    </div>
  );
};

export default Profile;
