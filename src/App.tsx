import { useRef } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const menuBtn = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  const clickHamburgerHandler = () => {
    menuBtn.current?.classList.toggle("open");
    menu.current?.classList.toggle("flex");
    menu.current?.classList.toggle("hidden");
  };

  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src="assets/logo.svg" alt="" />
          </div>
          <div className="hidden space-x-6 md:flex">
            <Link to="#" className="hover:text-darkGrayishBlue">
              Pricing
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              Product
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              About Us
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              Careers
            </Link>
            <Link to="#" className="hover:text-darkGrayishBlue">
              Community
            </Link>
          </div>
          <Link
            to="#"
            className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Get Started
          </Link>

          <button
            ref={menuBtn}
            onClick={clickHamburgerHandler}
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="md:hidden">
          <div
            ref={menu}
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <Link to="#">Pricing</Link>
            <Link to="#">Product</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Community</Link>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone togetther to build better products
            </h1>
            <p className="max-w-md text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="#"
                className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="assets/illustration-intro.svg" alt="" />
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex items-start space-x-4">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                01
              </div>
              <div>
                <h3 className=" mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                02
              </div>
              <div>
                <h3 className=" mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                03
              </div>
              <div>
                <h3 className=" mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container px-4 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>

          <div className="flex flex-col mt-24 space-y-20 md:flex-row md:space-x-6 md:space-y-0">
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="assets/avatar-richard.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="assets/avatar-richard.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src="assets/avatar-richard.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">Richard Watts</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>

          <div className="my-16">
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-middle hover:bg-brightRedLight"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section id="cta" className="bg-brightRed">
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          <h2 className="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          <div>
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl align-middle hover:bg-gray-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>

            <div>
              <img src="assets/logo-white.svg" className="h-8" alt="" />
            </div>

            <div className="flex justify-center space-x-4">
              <Link to="#">
                <img src="assets/icon-facebook.svg" alt="" className="h-8" />
              </Link>

              <Link to="#">
                <img src="assets/icon-youtube.svg" alt="" className="h-8" />
              </Link>

              <Link to="#">
                <img src="assets/icon-twitter.svg" alt="" className="h-8" />
              </Link>
              <Link to="#">
                <img src="assets/icon-pinterest.svg" alt="" className="h-8" />
              </Link>

              <Link to="#">
                <img src="assets/icon-instagram.svg" alt="" className="h-8" />
              </Link>
            </div>
          </div>

          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <Link to="#" className="hover:text-brightRed">
                Home
              </Link>
              <Link to="#" className="hover:text-brightRed">
                Pricing
              </Link>
              <Link to="#" className="hover:text-brightRed">
                Products
              </Link>
              <Link to="#" className="hover:text-brightRed">
                About
              </Link>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link to="#" className="hover:text-brightRed">
                Careers
              </Link>
              <Link to="#" className="hover:text-brightRed">
                Community
              </Link>
              <Link to="#" className="hover:text-brightRed">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
