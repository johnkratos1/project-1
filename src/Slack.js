import v1 from "./images/vector1.png";
import v2 from "./images/vector2.png";
import v3 from "./images/vector3.png";
import v4 from "./images/vector4.png";

const Slack = () => {
  return (
    <a href="https://hng9.slack.com">
      <div className="slack">
        <img src={v1} alt="slack vector" />
        <img src={v2} alt="slack vector" />
        <img src={v3} alt="slack vector" />
        <img src={v4} alt="slack vector" />
      </div>
    </a>
  );
};

export default Slack;
