import { Link } from "react-router-dom";
import notFound from "../assets/images/not-found.jpg";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <section className="pageNotFound">
      <p>404 Page Not Found</p>
      <img src={notFound} alt="not found icon" />
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </section>
  );
};
