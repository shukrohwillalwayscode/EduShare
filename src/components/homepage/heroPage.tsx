export const HeroPage = () => {
  return (
    <>
      <section>
        <div className=" flex flex-col gap-10 items-center pt-[100px] pb-[70px] md:gap-10  ">
          <h1 className="text-[40px] font-bold text-[#CA9C72] items-center max-md:text-[35px]  max-sm:text-[30px] max-md:py-[30px]">
            Welcome to EduShare!
          </h1>

          <p className="text-[26px] max-md:text-[18px] max-sm:text-[15px]">
            Got knowledge? <span className="text-[#CA9C72]">Share it.</span>{" "}
            Need knowledge?<span className="text-[#CA9C72]"> Find it</span>.
          </p>
        </div>
      </section>
      <section>
        <img src="/ShareHeroImg.png" alt="" loading="lazy" className="w-full" />
      </section>
    </>
  );
};
