import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate("/weather")}>
        {" "}
        Get Weather
      </button>
      <button type="button" onClick={() => navigate("/dashboard")}>
        {" "}
        Shopping list
      </button>
    </>
  );
};
