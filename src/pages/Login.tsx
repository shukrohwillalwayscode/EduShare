import { useState } from "react";
import { Input } from "../components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { BsMicrosoft } from "react-icons/bs";

import { Button } from "../components/ui/button";
import EdushareLogo from "../components/ui/EdushareLogo";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = {
      email: "",
      password: "",
    };

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      navigate("/");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="max-sm:px-1  mt-6">
        <Button children="Back" size="back" onClick={() => navigate(-1)} />
        <div className="max-w-xl mx-auto py-30 p-6 bg-white max-md:w-[90%]  max-sm:w-full  max-sm:mx-[10px] mt-4  ">
          <div className="flex justify-center ">
            <EdushareLogo
              logoImg="/Edushare logo.png"
              logoText1="Edu"
              logoText2="Share"
            />
          </div>
          <h1 className="text-[40px] max-md:text-[30px] text-gray-500 font-[500] text-center m-3">
            Log in to EduShare
          </h1>

          <form
            action=""
            onSubmit={handleSubmit}
            className="  space-y-5 grid grid-cols-1  max-md:space-y-7   items-center  "
          >
            <Input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              error={errors.password}
              icon2={
                showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )
              }
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="access"
                size="lg"
                className="   rounded-3xl bg-[#2A5A8A] py-4 text-base font-semibold text-white transition duration-200 ease-in-out hover:bg-[#2A5A8A] hover:-translate-y-0.5"
              >
                Sign Up
              </Button>
            </div>

            <section className="flex items-center  justify-center gap-7">
              <div className="border-t-gray-400 w-[90px] border-l-0 border-r-0 border-b-0 border-t"></div>
              <p className="max-sm:text-[14px]">Or login in with</p>
              <div className="border-t-gray-400 w-[90px] border-l-0 border-r-0 border-b-0 border-t in"></div>
            </section>

            <section className="flex justify-center gap-11">
              <span>{<FcGoogle className=" w-[25px] h-[25px]" />}</span>
              <span>
                {<PiAppleLogoDuotone className=" w-[25px] h-[25px]" />}
              </span>
              <span>{<BsMicrosoft className=" w-[25px] h-[25px]" />}</span>
            </section>

            <section className="flex justify-center gap-2 items-center max-sm:  ">
              <p className="  max-sm:text-[10px] ">
                Do you have an account?
                <a href="/signup" className="text-blue-500 underline">
                  Sign Up
                </a>
              </p>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
