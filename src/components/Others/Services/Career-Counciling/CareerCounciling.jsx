import CareerCouncilingAbout from "./CareerCouncilingAbout";
import CareerCouncilingBanner from "./CareerCouncilingBanner";
import CareerCouncilingProcess from "./CareerCouncilingProcess";
import KeyOfferings from "./KeyOfferings";

const CareerCounciling = () => {
  return (
    <div>
      <CareerCouncilingBanner></CareerCouncilingBanner>
      <KeyOfferings></KeyOfferings>
      <CareerCouncilingAbout></CareerCouncilingAbout>
      <CareerCouncilingProcess></CareerCouncilingProcess>
    </div>
  );
};

export default CareerCounciling;
