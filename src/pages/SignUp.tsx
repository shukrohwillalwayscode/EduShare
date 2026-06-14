import { useState } from "react";
import { Input } from "../components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";
import { BsMicrosoft } from "react-icons/bs";

import { Button } from "../components/ui/button";
import EdushareLogo from "../components/ui/EdushareLogo";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  // const [passwordStrength, setPasswordStrength] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // const checkPasswordStrength = (password: string) => {
    //   if (password.length < 8) {
    //     return "Weak";
    //   }

    //   if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
    //     return "Medium";
    //   }

    //   if (
    //     password.match(/[A-Z]/) &&
    //     password.match(/[0-9]/) &&
    //     password.match(/[^A-Za-z0-9]/)
    //   ) {
    //     return "Strong";
    //   }

    //   return "";
    // };
    // setPasswordStrength(checkPasswordStrength);
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
      navigate("/");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className=" max-sm:px-1  mt-6">
        <Button children="Back" size="back" onClick={() => navigate(-1)} />
        <main className="max-w-xl mx-auto py-30 p-6 bg-white max-md:w-[90%]  max-sm:w-[95%]  max-sm:mx-[10px] mt-4 bg-white ">
          <section className="flex justify-center ">
            <EdushareLogo
              logoImg="/Edushare logo.png"
              logoText1="Edu"
              logoText2="Share"
            />
          </section>
          <h1 className="text-[40px] max-md:text-[30px] text-gray-500 font-[500] text-center m-3">
            Sign Up
          </h1>

          <form
            action=""
            onSubmit={handleSubmit}
            className="  space-y-5 grid grid-cols-1  max-md:space-y-7 items-center  "
          >
            <section className=" grid grid-cols-2 gap-[10px] ">
              <Input type="text" placeholder=" First Name" icon1 />
              <Input type="text" placeholder="Last Name" />
            </section>
            <Input
              type="email"
              icon1={<CiMail />}
              error={errors.email}
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              error={errors.password}
              icon1={<GoLock />}
              icon2={
                showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              error={
                confirmPassword && password !== confirmPassword
                  ? "Passwords do not match"
                  : ""
              }
              icon1={<GoLock />}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <section className="flex gap-2 items-center max-sm:  ">
              <Input type="checkbox" className="" />

              <div>
                <p className="  max-sm:text-[10px] ">
                  {" "}
                  I agree to the{" "}
                  <a href="/" className="text-blue-500 underline">
                    {" "}
                    Terms of Services{" "}
                  </a>
                  and{" "}
                  <a href="/" className="text-blue-500 underline">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </section>

            <section className="flex justify-center">
              <Button
                type="submit"
                variant="access"
                size="lg"
                className="  rounded-3xl bg-[#2A5A8A] py-4 text-base font-semibold text-white transition duration-200 ease-in-out hover:bg-[#2A5A8A] hover:-translate-y-0.5"
              >
                Sign Up
              </Button>
            </section>
            <section className="text-center">
              <p>Or sign up with</p>
            </section>
            <section className="flex justify-center gap-7">
              <span>{<FcGoogle className=" w-[25px] h-[25px]" />}</span>
              <span>
                {<PiAppleLogoDuotone className=" w-[25px] h-[25px]" />}
              </span>
              <span>{<BsMicrosoft className=" w-[25px] h-[25px]" />}</span>
            </section>
            <section className="text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 underline">
                  {" "}
                  Login
                </Link>
              </p>
            </section>
          </form>
        </main>
      </div>
    </>
  );
};

export default SignUp;
