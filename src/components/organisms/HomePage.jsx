import RouterLink from "../atoms/RouterLink";

export default function HomePage() {
  return (
    <main>
      <section className="home-page relative bg-primary text-white primary min-h-screen overflow-hidden">
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 -top-28 lg:-top-96 w-full lg:w-[870px] transform left-1/2 -translate-x-1/2"
        />
        <img
          src="/assets/images/blobs-gradient.png"
          alt="element"
          className="absolute z-0 bottom-0 lg:-bottom-96 w-full lg:w-[870px] transform -right-24"
        />
        <div className="container-content lg:flex items-center h-screen overflow-hidden px-5 lg:px-36 relative z-10">
          <div className="content-wrapper grid grid-cols-1 lg:grid-cols-2 items-center gap-16 pt-32 lg:p-0 font-primary">
            <div className="content-caption">
              <div className="caption text-center lg:text-start">
                <h1 className="font-bold text-4xl lg:text-7xl mb-6 lg:mb-9">
                  Boost Your Knowledge with{" "}
                  <span className="relative inline-block">
                    <span className="w-fit relative z-10">Queasy</span>
                    <div className="absolute z-0 left-0 bottom-0 -rotate-2 h-3 w-full bg-gradient-to-r from-fourth to-transparent"></div>
                  </span>
                  !
                </h1>
                <span>
                  Explore a variety of quizzes to sharpen your skills and have
                  fun along the way 🧑🏻‍💻{" "}
                </span>
                <div className="button mt-8">
                  <RouterLink path="/">Start Quiz Now</RouterLink>
                </div>
              </div>
            </div>
            <div className="content-image">
              <img
                src="/assets/images/mockup-mobile.png"
                alt="Mockup Mobile"
                className="w-72 mx-auto lg:hidden"
              />
              <img
                src="/assets/images/mokcup-laptop.png"
                alt="Mockup Laptop"
                className="w-[60%] -rotate-3 -translate-y-1/2 -right-40 mx-auto hidden lg:block absolute"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
