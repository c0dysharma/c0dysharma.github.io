import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/all";

const Logo = () => (
  <span className="font-logoFont text-lg md:text-xl lg:text-2xl">
    c0dysharma<span className="text-accentColor">.</span>
  </span>
);

const HeaderCTAbtn = ({ onClickHandler }) => (
  <button
    onClick={onClickHandler}
    className="text-white bg-accentColor visited:bg-hoverColor hover:bg-hoverColor active:bg-hoverColor px-3 py-1 rounded-base mr-2 font-semibold md:text-lg"
  >
    Let's Talk
  </button>
);

const MobileNav = ({}) => (
  <div className="absolute top-6 right-8">
    <ul className="flex flex-col bg-white px-6 py-3 rounded-base text-sm gap-1 font-medium">
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#about">About Me</a>
    </ul>
  </div>
);

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const onCTAClickHandler = () => {
    document.getElementById("cta").scrollIntoView();
  };
  const onHamburgerClickHandler = () => {
    setShowNav((value) => !value);
  };

  return (
    <div className="pt-7 flex items-center justify-between relative">
      {/* show only when hamburger is clicked  */}
      {showNav && <MobileNav />}

      <Logo />

      <ul className="hidden md:flex gap-24 font-medium text-mutedColor">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
      </ul>

      <div className="flex items-center">
        <HeaderCTAbtn onClickHandler={onCTAClickHandler} />
        <GiHamburgerMenu
          className="md:hidden cursor-pointer"
          onClick={onHamburgerClickHandler}
          size={25}
        />
      </div>
    </div>
  );
};

export default NavBar;
