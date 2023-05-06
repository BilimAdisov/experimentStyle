import { useState } from "react";

export const FormComponent = () => {
  const [fName, setFName] = useState<string>();
  const [fEmail, setFEmail] = useState<string>();
  const [fNumber, setFNumber] = useState<number | string>();
  return (
    <>
      <div className="form">
        <div className="form-wrapper">
          <div className="form-title">
            <h1>Вам интересно что мы делаем?</h1>
            <p>
              Хотите подробнее узнать об этом проекте или заказать подобный
              проект? Отправьте сообщение и мы свяжемся с вами
            </p>
          </div>
          <img src="https://mitapp.pro/static/img/mac.png" alt="" />
          <div className="inp-place">
            <div className="top-inp">
              <input
                type="text"
                placeholder="Имя"
                onChange={(e) => setFName(e.target.value)}
              />
              <input
                type="text"
                placeholder="E-mail"
                onChange={(e) => setFEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Номер телефона"
              onChange={(e) => setFNumber(e.target.value)}
            />
          </div>
          <button className="form-btn">Отправить</button>
        </div>
      </div>
    </>
  );
};
