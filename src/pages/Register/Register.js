import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

import "./Register.css";
import { AuthContext } from "../../UserContext/UserContext";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //
  const notify = (message) => toast(message);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    //
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        notify("Registration successful");
        setSuccess(true);
        updateUser(name).then(() => {
          // Profile updated!
          // ...
        });
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Create your account
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Label className="text-muted">Name</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="text-muted">Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="text-muted">Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button variant="info" type="submit">
                  Register
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already Registered?
                  <Link to="/login" className="link-success">
                    Login
                  </Link>
                </p>
              </Form>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <Toaster />;
    </MDBContainer>
  );
};

export default Register;
