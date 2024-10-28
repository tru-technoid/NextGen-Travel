import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row,Button } from "reactstrap";
import "../Styles/login.css";

import registerimg from "../assets/images/register.jpg";
import UserIcon from "../assets/images/user.jpg";

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName:undefined,
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={registerimg} alt="Can't Load Img" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={UserIcon} alt="Can't Load Icon" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Create Account
                  </Button>
                </Form>
                <p>
                  Already Have An Account ? <Link to="/login">Login</Link>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
