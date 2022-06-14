import React from "react";

import {Route, Routes} from "react-router-dom";
import Posts from "./components/Posts";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="posts" element={<Posts />}>
                <Route path=":id" element={<PostDetail />} />
            </Route>
        </Routes>
    );
}

export default App;
