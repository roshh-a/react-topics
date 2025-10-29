import React, { useContext } from "react";
import { AuthUser } from "../Context/UserContext";

export const Dashboard: React.FC = () => {
  const user = useContext(AuthUser);
  return (
    <>
      <div className="font-bold">
        Username form the context:{" "}
        <span className="text-amber-800">{user?.userName}</span>
      </div>
    </>
  );
};
