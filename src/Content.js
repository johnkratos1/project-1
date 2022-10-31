import Profile from "./ProfileSection";
import Link from "./LinkSection";

const Content = () => {
  const linkData = [
    {
      id: "twitter",
      title: "Twitter Link",
      link: "https//twitter.com/@johnAyo72850989",
      target: "blank",
      subtext: "Visit my twitter page for more information about me",
    },
    {
      id: "btn__zuri",
      title: "Zuri Team",
      link: "https//training.zuri.team",
      target: "blank",
      subtext: "Meet the Zuri Team",
    },
    {
      id: "books",
      title: "Zuri Books",
      link: "http//books.zuri.team",
      target: "blank",
      subtext:
        "You can find all kinds of tech related books on programming languages here. Get access to free and premium books with great and easy to understand concepts.",
    },
    {
      id: "book__python",
      title: "Python Books",
      link: "https//books.zuri.team/python-for-beginners?ref_id=John Kratos",
      target: "blank",
      subtext:
        "Get the best books on Python programming for absolute beginners with step by step instructions and guides.",
    },
    {
      id: "pitch",
      title: "Backgroung Check for Coders",
      link: "https//background.zuri.team",
      target: "blank",
      subtext:
        "Be part of the Zuri Coder Community by undergoing a background check for proper evaluation and authenticity.",
    },
    {
      id: "book__design",
      title: "Design Books",
      link: "https//books.zuri.team/design-rules",
      target: "blank",
      subtext: "Get great books on Design that worth more than it price",
    },
  ];

  return (
    <>
      <Profile />
      {linkData.map((data) => (
        <Link
          id={data.id}
          title={data.title}
          link={data.link}
          target={data.target}
          subtext={data.subtext}
        />
      ))}
    </>
  );
};

export default Content;
