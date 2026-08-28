import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <div className="not-found-container">
        <h3 className="not-found-title">Oops!</h3>
        <p className="not-found-text">Road Work Ahead</p>
        <Link to="/" className="not-found-link">
          Take This Detour
        </Link>
      </div>
    </>
  );
};

export default NotFound;
