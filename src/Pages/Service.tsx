import { FormComponent } from "../components/Form/Form";
import { ServiceList } from "../components/serviceComponent/employes/serviceList";
import { ServiceBanner } from "../components/serviceComponent/serviceBanner/ServiceBanner";

export const ServicePage = () => {
  return (
    <div className="service">
      <div className="service-wrapper">
        <ServiceBanner />
        <ServiceList />
        <FormComponent />
      </div>
    </div>
  );
};
