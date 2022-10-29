import Git from "./Git";
import Slack from "./Slack";

const Social = () => {
  return (
    <div className="social">
      <Slack />
      <Git />
    </div>
  );
};

export default Social;
