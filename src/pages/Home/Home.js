import { React, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const Home = () => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const task = event.target.value;
      const data = { taskname: task };
      const notify = (message) => toast(message);
      // fetch

      fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          notify("Task added successfully");
          console.log("Success:", data);
          event.target.value = "";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    //
    //
  };
  return (
    <div className="mx-auto w-50 my-5">
      <div className="mx-auto text-center">
        <img
          src="https://i.ibb.co/NLH379W/Next-To-Do-blue-removebg-preview.png"
          alt=""
          srcSet=""
          width="200"
          height="30"
        />
      </div>
      <input
        className="mx-auto w-100 my-2 rounded-pill p-2"
        type="text"
        placeholder="                                               write and press enter key to add your next task"
        onKeyDown={handleKeyDown}
        required
      />
      <Toaster />;
    </div>
  );
};

export default Home;
