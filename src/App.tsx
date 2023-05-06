import React from "react";
import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/Main";
import { ServicePage } from "./Pages/Service";
import { PortfolioPage } from "./Pages/Portfolio";
import { PresentPage } from "./Pages/PresentPage";
import { ContactPage } from "./Pages/Contact";

function App() {
  // AOS.init();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<PresentPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
