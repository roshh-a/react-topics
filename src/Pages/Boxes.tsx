import React from "react";

const Boxes: React.FC = () => {
  return (
    <>
      <div className="h-[350px] w-[300px] p-[50px] border border-amber-600 bg-amber-100">
        This div is smaller (width is 300px and height is 100px). Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>

      <div className="h-[350px] w-[300px] border border-amber-950 bg-amber-300">
        This div is bigger (width is also 300px and height is 100px). Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </div>
      <div></div>
    </>
  );
};

export default Boxes;
