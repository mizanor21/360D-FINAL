import CoreITService from "./CoreITService";
import ITServiceBanner from "./ITServiceBanner";
import ITServiceChoose from "./ITServiceChoose";

const ITService = () => {
  return (
    <div>
      <ITServiceBanner></ITServiceBanner>
      <CoreITService></CoreITService>
      <ITServiceChoose></ITServiceChoose>
    </div>
  );
};

export default ITService;
