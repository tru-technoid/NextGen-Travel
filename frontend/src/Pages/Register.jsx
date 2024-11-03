import React, { useContext, useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row,Button } from "reactstrap";
import "../Styles/login.css";

import registerimg from "../assets/images/register.jpg";
import UserIcon from "../assets/images/user.jpg";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../Utils/config";


const Register = () => {
  const [credentials, setCredentials] = useState({
    userName:undefined,
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async e => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method : 'post',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(credentials),
      })
      const result = await res.json()

      if(!res.ok) alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')

    } catch (err) {
      alert(err.message)
    }

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
                      type="email"
                      placeholder="Enter Email"
                      required
                      id="email"
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
                    Sign up
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
