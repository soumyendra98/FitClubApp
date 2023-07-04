import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

//import { green } from "@mui/material/colors";
/*import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';*/

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LoginComponentContainer = styled.div`
  background: linear-gradient(
    -45deg,
    #ff9147,
    #ff4961,
    #fb62f6,
    #6153de,
    #1cd8d2,
    #ff9147,
    #ff4961,
    #fb62f6,
    #6153de,
    #1cd8d2
  );
  background-size: 300% 300%;
  animation: ${gradientAnimation} 20s linear infinite;
`;

const InputBox = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
`;
const LoginButton = styled.button`
  /* Add smooth rounded edges */
  border-radius: 0.5rem;

  /* Add box shadow on hover */
  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

const LoginForm = styled.form`
  background-color: transparent;
`;

function LoginComponent(props) {
  // for navigation redirection
  const navigate = useNavigate();
  const [type, setRole] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const vertical = "top";
  const horizontal = "center";
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    console.log(auth);
    if (auth && auth.employees[0].isLogged) {
      // localStorage.setItem("auth", false);
      props.callBackHandler();
      navigateToRole("m");
    }
  }, []);

  function navigateToRole(role) {
    if (role === "HCM") {
      console.log("redirecting");
      props.callBackHandler();
      // redirecting to Health Club employee dash board
      navigate("/hcmember");
    } else if (role === "M") {
      console.log(role);
      console.log("redirecting to member dashboard");
      props.callBackHandler();
      navigate("/member");
    } else {
      console.log(role);
      console.log("redirecting to member dashboard");
      props.callBackHandler();
      navigate("/member");
    }
  }

  /*function checkRole(email) {
  // check  the role of user
  // var type = email.split('@')
  // var emp_type = type[1].split('.')
  // console.log("checking role")
  // console.log(emp_type[0])

  //implement the functionality with api

  return role;
}*/

  function authorize(emailAddress, password) {
    // check if username and password are correct
    //implement the functionality with api
    return axios
      .post("/all/login", {
        emailAddress: emailAddress,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.login === "successful") {
          setRole(response.data.type);
          var User = {};
          var employees = [];
          User.employees = employees;
          console.log(User);

          var employee = {
            userName: emailAddress,
            userRole: response.data.type,
            isLogged: true,
          };
          User.employees.push(employee);
          console.log(User);

          console.log(JSON.stringify(User));

          localStorage.setItem("auth", JSON.stringify(User));
          //props.changeLogged(true);
          navigateToRole(response.data.type);
          return true;
        } else {
          handleClick();
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        handleClick();
        return false;
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authenticate user with email and password
    console.log("123");
    console.log(e.target.emailAddress.value);
    console.log(e.target.password.value);

    const emailAddress = e.target.emailAddress.value;
    const password = e.target.password.value;

    authorize(emailAddress, password);
    // Redirect to dashboard or show error message
  };

  return (
    /*<MDBContainer className="my-5">
        <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
       
        key={vertical + horizontal}><Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Invalid credentials
      </Alert>
      </Snackbar>
  
        <MDBCard>
          <MDBRow className='g-0'>
  
            <MDBCol md='6'>
              <MDBCardImage src='https://blog.wod.guru/wp-content/uploads/2022/10/WodGuru-Membership-Management-Software.png' alt="login form" className='rounded-start w-100'/>
            </MDBCol>
  
            <MDBCol md='6'>
              <MDBCardBody className='d-flex flex-column'>
  
                <div className='d-flex flex-row mt-2'>
                  <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                  <span className="h1 fw-bold mb-0">
                  </span>
                </div>
  
                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login to your account</h5>
  
                  <MDBInput className='mb-4' id='email' type='email' size="lg" label="Email"/>
                  <MDBInput className='mb-4' id='password' type='password' size="lg" label="Password"/>
  
                <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={() => {handleSubmit()}}>Login</MDBBtn>

                <a className="small text-muted" href="#!">Forgot password?</a>
                <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Note: Don't have an account? Request Health Club Employee to Enroll for the Membership</p>
  
                <div className='d-flex flex-row justify-content-start'>
                  <a href="#!" className="small text-muted me-1">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </div>
  
              </MDBCardBody>
            </MDBCol>
  
          </MDBRow>
        </MDBCard>
  
      </MDBContainer>*/
    <LoginComponentContainer>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Invalid credentials{" "}
        </Alert>{" "}
      </Snackbar>{" "}
      <div className="LoginComponent">
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="form-outline mb-4">
                    <InputBox
                      type="email"
                      id="emailAddress"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      required
                    />
                  </div>{" "}
                  <div className="form-outline mb-3">
                    <InputBox
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      required
                    />
                  </div>{" "}
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="remember"
                      />{" "}
                      {/* <label class="form-check-label" for="form2Example3"> */}
                      Remember me {/* </label> */}{" "}
                    </div>{" "}
                    <Link to="/forgotpassword" className="text-body">
                      Forgot password ?
                    </Link>{" "}
                  </div>{" "}
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn loginButton btn-lg"
                      color="green"
                      activeStyle={{
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      Login{" "}
                    </button>{" "}
                    {/* <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                                                                                                                  class="link-danger">Register</a></p> */}{" "}
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </LoginComponentContainer>
  );
}

export default LoginComponent;
