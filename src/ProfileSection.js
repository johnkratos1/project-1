import avatar from "./images/avatar.jpg";
import shareBtn from "./images/avatar share btn.png";
import shareMobBtn from "./images/avatar share_mob btn.png";
import { RWebShare } from "react-web-share";

const Profile = () => {
  return (
    <div className="ProfileSection">
      <img id="profile__img" src={avatar} alt="avatar" />
      <h2 id="slack"> John Kratos </h2>
      <div className="shareText" text="Share Link">
        <RWebShare
          data={{
            text: "HNG9-internship Link-tree project",
            url: "https://johnkratos1.github.io/project-1/",
            title: "John Kratos Link-Tree HNG9-intership project",
          }}
        >
          <img id="shareBtn" src={shareBtn} alt="Share Profile" />
        </RWebShare>
        <RWebShare
          data={{
            text: "HNG9-internship Link-tree project",
            url: "https://johnkratos1.github.io/project-1/",
            title: "John Kratos Link-Tree HNG9-intership project",
          }}
        >
          <img id="shareMobBtn" src={shareMobBtn} alt="Share Profile" />
        </RWebShare>
      </div>
    </div>
  );
};

export default Profile;
