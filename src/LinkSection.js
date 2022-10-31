const Link = ({ title, link, target, subtext }) => {
  return (
    <div className="container">
      <a target={target} href={link}>
        <button className="link" subtext={subtext}>
          <h3>{title}</h3>
        </button>
      </a>
    </div>
  );
};

export default Link;
