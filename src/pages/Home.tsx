import { HeroPage } from "../components/homepage/heroPage";
import HomeAbout from "../components/homepage/about";
import { Footer } from "../components/homepage/footer";
import { NavBar, navlinks } from "../components/ui/nav";

const Home = () => {
  return (
    <div>
      <NavBar
        logoImg="/Edushare logo.png"
        logoText1="Edu"
        logoText2="Share"
        navlinks={navlinks}
      />
      <HeroPage />
      <HomeAbout />
      <Footer />
    </div>
  );
};
export default Home;
