import { useState } from "react";
import { Button } from "./button";
import { Link, useNavigate } from "react-router-dom";

type Navprops = {
  logoImg: string;
  logoText1: string;
  logoText2: string;
  navlinks: {
    label: string;
    href: string;
  }[];
  className?: string;
  onClick?: () => void;
};
export const navlinks = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "MyUpload", href: "/upload" },
  { label: "about", href: "/about" },
];

export const NavBar = ({
  logoImg,
  logoText1,
  logoText2,
  navlinks,
  className,
}: Navprops) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav
      className={` w-full  h-[89px]  p-5 fixed z-50 flex  justify-between gap-2.5 items-center text-center cursor-pointer bg-white ${className}`}
    >
      <section className="flex text-center  gap-3.5 items-center">
        <img src={logoImg} alt="Edushare Logo" />
        <div className="flex">
          <p className="text-[#477491] text-[22px] font-bold">{logoText1}</p>
          <p className="text-[#CA9C72] text-[22px] font-bold">{logoText2}</p>
        </div>
      </section>
      {/* Desktop navlinks */}
      <section className=" hidden lg:flex items-center  ">
        <div className=" flex justify-between w-[50%] gap-[70px]  ">
          {navlinks.map((items, i) => (
            <Link
              to={items.href}
              key={i}
              className="text-[18px] text-[#0d5e93] font-[600] "
            >
              {items.label}
            </Link>
          ))}
        </div>
      </section>
      <section className="flex gap-3 max-md:hidden  md:max-lg:hidden">
        <Button
          size="sm"
          variant="secondary"
          className="hover:bg-[#CA9C72] hover:text-white"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          size="sm"
          variant="primary"
          className="hover:bg-white hover:text-[#CA9C72]"
          onClick={() => navigate("/signup")}
        >
          SignUp
        </Button>
      </section>

      {/* Mobile navlinks */}
      <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img
          loading="lazy"
          src="/menu.svg"
          alt=" Menu Icon"
          className="w-[90px] h-[90px] max-md:h-[50px] max-md:w-[50px]"
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-[80px]  lg:hidden left-0 w-full m-2 mb-0 font-bold text-[18px] bg-white border-black border-[1px]  flex flex-col gap-4 p-5">
          {navlinks.map((items, i) => (
            <Link
              key={i}
              to={items.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-[18px] text-[#0d5e93] font-[600] transition "
            >
              {items.label}
            </Link>
          ))}

          <div className="space-y-[20px]">
            <Button onClick={() => navigate("/signup")}>SignUp</Button>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
