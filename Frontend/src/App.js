//import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginComponent from './Login/LoginComponent';
// import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from "./components";
import React from "react";

import Service from "./pages/Service/service";
import Classes from "./pages/Classes/classes";
import Pricing from "./pages/Pricing/pricing";
import Contact from "./pages/Contacts/contact";
import MemberHomePage from "./pages/Home Page/MemberHomePage/member";
import HCMember from "./pages/Home Page/HCMemberHomePage/hcmember";
import LoginComponent from "./pages/Login/Login";
import SignupComponent from "./pages/Signup/SignupForm";
import { GymEnrollment } from "./components/GymEnrollment";
import { LogHours } from "./components/LogHours";
import ActivitiesChart from "./components/ActivitiesChart";
import ClassSchedule from "./components/ClassSchedule";
import { useState } from "react";
import EnrollComponent from "./pages/Home Page/HCMemberHomePage/enrollmember";
import ForgotPassword from "./pages/Login/forgotpassword";

function App() {
    const [state, setSate] = useState(true);

    function callBackHandler() {
        console.log("handler called");
        setSate(!state);
    }
    return ( <
            Router > { < Navbar loginstate = { state }
                />}  <
                Routes >
                <
                Route path = "/"
                element = { < Home / > }
                /> <
                Route path = "/gymenrollment"
                element = { < GymEnrollment / > }
                /> <
                Route path = "/loghours"
                element = { < LogHours / > }
                /> <
                Route path = "/activitieschart"
                element = { < ActivitiesChart / > }
                /> <
                Route path = "/classSchedule"
                element = { < ClassSchedule / > }
                /> <
                Route path = "/service"
                element = { < Service / > }
                /> <
                Route path = "/contact"
                element = { < Contact / > }
                /> <
                Route path = "/classes"
                element = { < Classes / > }
                /> <
                Route path = "/pricing"
                element = { < Pricing / > }
                /> <
                Route
                path = "/member"
                element = { < MemberHomePage callBackHandler = { callBackHandler }
                    />} / >
                    <
                    Route
                    path = "/hcmember"
                    element = { < HCMember callBackHandler = { callBackHandler }
                        />} / >
                        <
                        Route
                        path = "/login"
                        element = { < LoginComponent callBackHandler = { callBackHandler }
                            />} / >
                            <
                            Route path = "/SignupForm"
                            element = { < SignupComponent / > }
                            /> <
                            Route path = "/enrollmember"
                            element = { < EnrollComponent / > }
                            /> <
                            Route path = "/forgotpassword"
                            element = { < ForgotPassword / > }
                            /> < /
                            Routes > <
                            /Router>
                        );
                    }

                    export default App;