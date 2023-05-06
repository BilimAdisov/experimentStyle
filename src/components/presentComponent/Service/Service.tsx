import { serviceInfo } from "../../../COMMON/moks/serviceCardInfo";

export const ServiceComponent = () => {
  return (
    <>
      <div className="present-service">
        <div className="ps-wrapper">
          <div className="top-title">
            <h1>Услуги</h1>
            <h3>Привет! Мы - разработчики. Что мы можем?</h3>
          </div>
          <div className="card-list">
            {serviceInfo.map((item) => (
              <div className="card-item" key={item.id}>
                <div className="icon-container">{item.icon}</div>
                <h3>{item.name}</h3>
                <p className="ps-title">{item.title}</p>
                <button className="ps-btn">Заказать</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
