import React from "react";
import "./App.css";
import { SampleForm } from "./Pages/SampleForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/UserContext";
import { HomeLayout } from "./HomeLayout";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      {/* must be wrapped with the BrowserRouter component to enable routing */}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<HomeLayout />} />
          <Route path="" element={<SampleForm />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
