import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row,Button } from "reactstrap";
import "../Styles/login.css";

import loginimg from "../assets/images/login.jpg";
import UserIcon from "../assets/images/user.jpg";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../Utils/config";


const Login = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[]);

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleClick = async e => {
    e.preventDefault();

    dispatch({type:'LOGIN_START'})

    try {
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method : 'post',
        headers: {
          'content-type':'application/json'
        },
        credentials:'include',
        body: JSON.stringify(credentials),
      })

      const result = await res.json()
      if(!res.ok) alert(result.message)

      console.log(result.data);

      dispatch({type:'LOGIN_SUCCESS',payload:result.data})
      navigate('/')

    } catch (err) {
      dispatch({type:'LOGIN_FAILURE',payload:err.message})
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginimg} alt="Can't Load Img" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={UserIcon} alt="Can't Load Icon" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
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
                    Log in
                  </Button>
                </Form>
                <p>
                  Don't Have An Account ? <Link to="/register">Create</Link>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
