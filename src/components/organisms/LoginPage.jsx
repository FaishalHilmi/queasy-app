import FormSignin from "../molecules/FormSignin";

export default function LoginPage() {
  return (
    <main>
      <section className="login relative bg-primary text-white min-h-screen overflow-hidden">
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 lg:-top-96 w-full lg:w-[870px] transform -right-32"
        />
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 -bottom-48 lg:-bottom-96 w-full lg:w-[870px] transform -left-24"
        />
        <div className="container-content font-primary px-5 lg:px-36 h-full relative z-10">
          <div className="content-wrapper">
            <div className="login-content h-screen flex items-center justify-center">
              <div className="login-wrapper lg:grid grid-cols-12 w-full">
                <div className="heading lg:col-span-6 mb-10">
                  <h1 className="font-semibold text-3xl lg:text-7xl mb-2 lg:mb-5">
                    Sign In to Your Account
                  </h1>
                  <span className="font-medium lg:text-xl">
                    Please enter your credentials to sign in
                  </span>
                </div>
                <div className="form-wrapper lg:col-span-6">
                  <FormSignin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
