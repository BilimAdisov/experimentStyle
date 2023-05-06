import { FormComponent } from "../components/Form/Form";
import { FirstBanner } from "../components/presentComponent/Banners/FirstBanner";
import { SecondBanner } from "../components/presentComponent/Banners/SecondBanner";
import { Slogan } from "../components/presentComponent/Banners/Slogan";
import { PortfolioComponent } from "../components/presentComponent/Portfolio/Portfolio";
import { ServiceComponent } from "../components/presentComponent/Service/Service";

export const PresentPage = () => {
  return (
    <div className="present">
      <div className="present-wrapper">
        <FirstBanner />
        <SecondBanner />
        <Slogan />
        <ServiceComponent />
        <PortfolioComponent />
        <FormComponent />
      </div>
    </div>
  );
};
