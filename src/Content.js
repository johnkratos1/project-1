import Profile from "./ProfileSection";
import Link from "./LinkSection";

const Content = () => {
  return (
    <>
      <Profile />
      <Link title={"Twitter Link"} link={"www.google.com"} />
      <Link title={"Zuri Team"} link={"www.google.com"} />
      <Link title={"Zuri  Books"} link={"www.google.com"} />
      <Link title={"Python Books"} link={"www.google.com"} />
      <Link title={"Backgroung Check for Coders"} link={"www.google.com"} />
      <Link title={"Design Books"} link={"www.google.com"} />
    </>
  );
};

export default Content;
