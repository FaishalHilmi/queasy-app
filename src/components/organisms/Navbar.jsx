import { useNavigate } from "react-router-dom";
import RouterLink from "../atoms/RouterLink";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import ModalLayout from "./ModalLayout";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState("");
  const [modalLogout, setModaLogout] = useState(false);
  const navigate = useNavigate();

  const getIsLogin = () => {
    const loginStatus = localStorage.getItem("isLogin");
    setIsLogin(loginStatus);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    localStorage.removeItem("quizState");

    window.location.href = "/";
  };

  const handleShowModalLogout = () => {
    setModaLogout(true);
  };

  const handleHideModalLogout = () => {
    setModaLogout(false);
  };

  const clearStorage = () => {
    localStorage.removeItem("quizState");
    navigate("/");
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
              <Button to="/" handle={clearStorage}>
                <img
                  src="/assets/images/logo-queasy.png"
                  alt="Logo Queasy"
                  className="w-28 lg:w-36"
                />
              </Button>
            </div>
            <div className="button">
              {isLogin ? (
                <Button handle={handleShowModalLogout} className="fourth">
                  Logout
                </Button>
              ) : (
                <RouterLink path="/login">Login</RouterLink>
              )}
            </div>
          </div>
        </div>
      </div>

      {modalLogout == true ? (
        <ModalLayout
          handleAction={handleLogout}
          handleCancel={handleHideModalLogout}
        />
      ) : null}
    </nav>
  );
}
