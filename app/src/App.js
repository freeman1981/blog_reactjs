import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Post from "./pages/post";
import About from "./pages/about";
import CustomAppBar from "./components/head";
import Filter from "./pages/filter";
import Login from "./pages/login";


export default function App() {
    return (
        <BrowserRouter>
            <CustomAppBar />
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/:postId" element={<Post />} />
                <Route path="/about" element={<About />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
