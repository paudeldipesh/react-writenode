import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} <Link to="/">WriteNode</Link>. All
        Rights Reserved.
      </p>
    </footer>
  );
};
