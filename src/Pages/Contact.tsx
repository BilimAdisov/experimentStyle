import { FormComponent } from "../components/Form/Form";
import { ContactComponent } from "../components/contactComponent/ContactComponent";

export const ContactPage = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <ContactComponent />
        <FormComponent />
      </div>
    </div>
  );
};
