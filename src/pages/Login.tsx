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
      <div className="px-[100px]  mt-6">
        <Button children="Back" size="back" onClick={() => navigate(-1)} />
        <div className="max-w-xl  py-30 p-6 bg-white mx-auto mt-4 bg-white ">
          <div className="flex justify-center ">
            <EdushareLogo
              logoImg="/Edushare logo.png"
              logoText1="Edu"
              logoText2="Share"
            />
          </div>
          <h1 className="text-[30px] font-bold text-center m-3">
            Log in to EduShare
          </h1>

          <form
            action=""
            onSubmit={handleSubmit}
            className="pt-[50px]  space-y-8 grid items-center"
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

            <Button
              type="submit"
              variant="access"
              size="lg"
              className=" mx-auto rounded-3xl bg-[#2A5A8A] py-4 text-base font-semibold text-white transition duration-200 ease-in-out hover:bg-[#2A5A8A] hover:-translate-y-0.5"
            >
              Sign Up
            </Button>

            <section className="flex items-center  justify-center gap-7">
              <div className="border-t-gray-300 w-[70px] border-l-0 border-r-0 border-b-0 border-t"></div>
              <p>Or login in with</p>
              <div className="border-t-gray-400 w-[70px] border-l-0 border-r-0 border-b-0 border-t in"></div>
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
