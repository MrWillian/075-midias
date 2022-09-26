import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Album from "../screens/Album";
import AlbumList from "../screens/AlbumList";
import Home from "../screens/Home";
import Signin from "../screens/Signin";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/albumList" element={<AlbumList />} />
                    <Route path="/album" element={<Album />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;