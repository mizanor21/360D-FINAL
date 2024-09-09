import BusinessAutomation from "./Business";
import ITBanner from "./ITBanner";
import ITState from "./ITState";
import Infrastructure from "./Infrastructure";
import PlanningPolicy from "./PlanningPolicy";
import Security from "./Security";

const ITStrategy = () => {
  return (
    <div>
      <ITBanner></ITBanner>
      <ITState></ITState>
      <Infrastructure />
      <PlanningPolicy></PlanningPolicy>
      <Security></Security>
      <BusinessAutomation></BusinessAutomation>
    </div>
  );
};

export default ITStrategy;
