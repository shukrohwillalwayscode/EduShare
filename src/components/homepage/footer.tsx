import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section>
        <div className=" flex justify-center mb-7 max-sm:px-10 min-md:px-15">
          <Button
            variant="primary"
            size="get"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        </div>
      </section>

      <section className="flex gap-[10px] justify-center text-center">
        <p className="text-[20px]">Already have an account?</p>
        <Link to="/login" className="text-[20px] text-[#0d5e93]">
          Sign In{" "}
        </Link>
      </section>

      <footer className="flex items-center gap-44 justify-center mt-5 bg-white text-center text-[#CA9C72]   text-[18px] font-bold pb-0 border-amber-500  max-sm:gap-20 ">
        <a>About</a>
        <a> Terms</a>
        <a>Privacy</a>
      </footer>
    </div>
  );
};
