import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import logo from "../assets/logo.png";

export const Header = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  function handleLogin() {
    signInWithPopup(auth, provider).then(() => {
      setIsAuth(true);
      localStorage.setItem("isAuth", JSON.stringify(true));
    });
  }

  function handleLogout() {
    signOut(auth);
    setIsAuth(false);
    localStorage.setItem("isAuth", JSON.stringify(false));
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="writenode logo" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth && (
          <NavLink to="/create" className="link">
            Create
          </NavLink>
        )}
        {isAuth ? (
          <button onClick={handleLogout} className="auth">
            <i className="bi bi-box-arrow-right"></i> Logout
          </button>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
