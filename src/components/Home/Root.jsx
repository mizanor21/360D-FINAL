import About from "./About/About";
import TabsMain from "./GlobalPartners/TabsMain";
import Goal from "./Goal/Goal";
import Hero from "./Hero/Hero";
import Plan from "./Plan/Plan";
import Reviews from "./Reviews/Reviews";

const Root = () => {
  return (
    <div>
      <About />
      <Hero />
      <Plan></Plan>

      <TabsMain></TabsMain>
      <Reviews></Reviews>
    </div>
  );
};

export default Root;
