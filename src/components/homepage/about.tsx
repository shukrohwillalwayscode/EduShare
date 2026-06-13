
const HomeAbout = () => {
  return (
    <div>
      <section>
        <div className=" flex flex-col gap-10 items-center pt-[100px] pb-[70px] md:gap-10  ">
          <h1 className="text-[40px] font-bold text-[#CA9C72] items-center max-md:text-[35px]  max-sm:text-[30px] max-md:py-[30px]">
            Learn, Share and Earn
          </h1>

          <p
            className="text-[26px] text-center w-[60%]
            md:text-[24px] max-sm:text-[20px] max-sm:w-[90%]  md:w-[90%]"
          >
            Access relevant textbooks, past questions and other educational
            materials from peers for{" "}
            <span className="text-[#CA9C72]">free</span> or at a{" "}
            <span className="text-[#CA9C72]">subsidised </span>
            rate. Declutter your book shelf by giving away books you no longer
            need
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
