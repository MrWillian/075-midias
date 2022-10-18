import { Fragment, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Album from "../screens/Album";
import AlbumList from "../screens/AlbumList";
import AlbumShow from "../screens/AlbumShow";
import Home from "../screens/Home";
import Signin from "../screens/Signin";

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Fragment>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/album-list" element={<AlbumList />} />
                        <Route path="/show-album/:id" element={<AlbumShow />} />
                        <Route path="/album" element={<Album />} />
                        <Route path="/album/:id" element={<Album />} />
                    </Routes>
                </Fragment>
            </Suspense>
        </BrowserRouter>
    )
}

export default RoutesApp;