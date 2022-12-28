import React, { useEffect } from "react";

const Home = () => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("enter key pressed");
    }
  };
  return (
    <div className="mx-auto w-50 my-5">
      <img
        src="https://i.ibb.co/NLH379W/Next-To-Do-blue-removebg-preview.png"
        alt=""
        srcSet=""
        width="200"
        height="30"
      />
      <input
        className="mx-auto w-100 my-2 rounded-pill p-2"
        type="text"
        placeholder="write and press enter key   to add task"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Home;
