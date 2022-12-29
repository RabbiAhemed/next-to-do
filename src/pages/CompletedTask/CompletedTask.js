import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./CompletedTask.css";
const CompletedTask = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/completed")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const deleteTask = (task) => {
    console.log(task._id);
    const agree = window.confirm(`do you want to delete ${task.taskname}`);
    if (agree) {
      fetch(`http://localhost:5000/completed/${task._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = tasks.filter((tsk) => tsk._id !== task._id);
            setTasks(remaining);
            alert("deleted task");
          }
        });
    }
  };

  // const addToCompleted = (task) => {
  //   console.log(task);
  //   const notify = (message) => toast(message);

  //   fetch("http://localhost:5000/completed", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(task),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       notify("Task completed");
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <Table className="my-5 text-center">
      <tbody>
        {tasks?.map((task, index) => (
          <tr key={task?._id}>
            <td>
              <b>{task?.taskname}</b>
            </td>
            <td>
              <input
                className="comment"
                type="text"
                name="comment"
                id=""
                placeholder="write a comment"
              />
            </td>
            {/* <td>
              <Link>
                <Button
                  variant="success"
                  size="sm"
                  // onClick={() => addToCompleted(task)}
                >
                  completed
                </Button>
              </Link>
            </td> */}
            <td>
              <Link to="/my-task">
                <Button variant="warning" size="sm">
                  Not complete
                </Button>
              </Link>
            </td>
            <td>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task)}
              >
                delete
              </Button>
            </td>

            {/* <td>
                  {booking && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <Button>Pay</Button>
                    </Link>
                  )}
                  {booking && booking.paid && (
                    <span className="fw-bold">Paid</span>
                  )}
                </td> */}
          </tr>
        ))}
        <Toaster />;
      </tbody>
    </Table>
  );
};

export default CompletedTask;
