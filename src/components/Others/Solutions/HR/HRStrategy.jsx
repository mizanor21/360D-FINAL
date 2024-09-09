import HRBanner from "./HRBanner";
import Plan from "./Plan";
import PMISKPI from "./PMISKPI";
import TalentManagement from "./TalentManagement";

const HRStrategy = () => {
  return (
    <div className="font-[Inter]">
      <HRBanner></HRBanner>
      <TalentManagement></TalentManagement>
      <PMISKPI></PMISKPI>
      <Plan />
    </div>
  );
};

export default HRStrategy;
