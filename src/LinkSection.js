const Link = ({ title, link }) => {
  return (
    <button className="link">
      <h3>
        <a href={`${link}`}> {title}</a>
      </h3>
    </button>
  );
};

export default Link;
