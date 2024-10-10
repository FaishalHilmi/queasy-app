import { Link } from "react-router-dom";
import RouterLink from "../atoms/RouterLink";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState("");

  const getIsLogin = () => {
    const loginStatus = localStorage.getItem("isLogin");
    setIsLogin(loginStatus);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");

    window.location.href = "/";
  };

  useEffect(() => {
    getIsLogin();
  }, []);

  return (
    <nav>
      <div className="navbar fixed z-20 w-full">
        <div className="container-content font-primary px-5 lg:px-36">
          <div className="content-wrapper pt-4 lg:pt-5 flex justify-between items-center">
            <div className="logo">
              <Link to="/">
                <img
                  src="/assets/images/logo-queasy.png"
                  alt="Logo Queasy"
                  className="w-28 lg:w-36"
                />
              </Link>
            </div>
            <div className="button">
              {isLogin ? (
                <button
                  onClick={handleLogout}
                  className="py-2 px-6 text-white rounded-full border border-fourth"
                >
                  Logout
                </button>
              ) : (
                <RouterLink path="/login">Login</RouterLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
