import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const MyTask = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <Table className="my-5 text-center">
      <tbody>
        {tasks?.length &&
          tasks?.map((task, index) => (
            <tr key={task?._id}>
              <td>
                <b>{task?.taskname}</b>
              </td>
              <td>
                <Button variant="success" size="sm">
                  completed
                </Button>
              </td>
              <td>
                <Button variant="warning" size="sm">
                  Update
                </Button>
              </td>
              <td>
                <Button variant="danger" size="sm">
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
      </tbody>
    </Table>
  );
};

export default MyTask;
