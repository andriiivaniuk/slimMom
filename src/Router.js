import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element = {<Home />}></Route>
            <Route path="/login" element = {<LoginForm />}></Route>
            <Route path="/register" element = {<RegisterForm />}></Route>
        </Routes>
    )
};

export default Router;