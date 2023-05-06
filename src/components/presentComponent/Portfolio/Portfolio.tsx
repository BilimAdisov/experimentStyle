import { PortfolioInfo } from "../../../COMMON/moks/portfolioCardInfo";


export const PortfolioComponent = () => {
  return (
    <>
      <div className="present-portfolio">
        <h1>Наши работы</h1>
        <h2>Здесь некоторые выполненные нами проекты:</h2>
        <div className="pp-wrapper">
          {PortfolioInfo.map((item) => (
            <div className="pp-card" key={item.id}>
              <div className="pp-img">
                <img src={item.image} alt="img" />
              </div>
              <div className="pp-title">
                <h3 className="pp-h3">{item.proname}</h3>
                <h4 className="pp-h4">{item.brand}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
