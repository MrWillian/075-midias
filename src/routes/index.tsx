import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../screens/Home";
import Signin from "../screens/Signin";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;