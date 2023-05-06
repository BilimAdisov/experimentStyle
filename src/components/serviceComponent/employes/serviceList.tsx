import { ServiceCardItem } from "../../../COMMON/moks/serviceCardItem";
import { ServiceCard } from "./serviceCard";

export const ServiceList = () => {
  return (
    <>
      <div className="service-list">
        <div className="serlist-wrapper">
          {ServiceCardItem.map((item: any) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
