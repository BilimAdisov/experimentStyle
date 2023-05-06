import { FormComponent } from "../components/Form/Form";
import { PortfolioBanner } from "../components/portfolioComponent/PortfolioBanner";
import { TeamComponent } from "../components/portfolioComponent/TeamComponents";
import { PortfolioDescription } from "../components/portfolioComponent/portfolioDescription";

export const PortfolioPage = () => {
  return (
    <div className="portfolio">
      <PortfolioBanner />
      <PortfolioDescription />
      <TeamComponent />
      <FormComponent />
    </div>
  );
};
