import Compliance from "./Compliance";
import HRAudit from "./HRAudit";
import HRServiceBanner from "./HRServiceBanner";
import TalentHR from "./TalentHR.jsx";

const HRServices = () => {
  return (
    <div>
      <HRServiceBanner></HRServiceBanner>
      <TalentHR></TalentHR>
      <HRAudit></HRAudit>
      <Compliance></Compliance>
    </div>
  );
};

export default HRServices;
