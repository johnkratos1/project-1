import Git from "./Git";
import Slack from "./Slack";

const Social = () => {
  return (
    <div className="social">
      <Slack />
      <div className="space"></div>
      <Git />
    </div>
  );
};

export default Social;
