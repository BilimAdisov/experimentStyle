export const ServiceCard = ({ icon, name, title }: any) => {
  return (
    <>
      <div className="card-item-full">
        <div className="icon-container">{icon}</div>
        <h3 className="card-name">{name}</h3>
        <p className="card-title">{title}</p>
        <button className="card-btn">Подробнее</button>
      </div>
    </>
  );
};
