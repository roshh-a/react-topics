import React from "react";
import "./App.css";
import { SampleForm } from "./Pages/SampleForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/UserContext";
import { HomeLayout } from "./HomeLayout";
import { WeatherPage } from "./Pages/WeatherPage";
import { Posts } from "./Pages/Posts";
import { CheckoutPageProvider } from "./CheckoutProvider";
import Boxes from "./Pages/Boxes";
import RTLPage from "./Pages/RTLPage";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      {/* must be wrapped with the BrowserRouter component to enable routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/dashboard" element={<HomeLayout />} />
          <Route path="/checkout" element={<CheckoutPageProvider />} />
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/rtl" element={<RTLPage />} />
          <Route path="" element={<SampleForm />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
