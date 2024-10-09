import RouterLink from "../atoms/RouterLink";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar fixed z-20 w-full">
        <div className="container-content font-primary px-5 lg:px-36">
          <div className="content-wrapper pt-4 lg:pt-5 flex justify-between items-center">
            <div className="logo">
              <img
                src="/assets/images/logo-queasy.png"
                alt="Logo Queasy"
                className="w-28 lg:w-36"
              />
            </div>
            <div className="button">
              <RouterLink path="/login">Login</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
