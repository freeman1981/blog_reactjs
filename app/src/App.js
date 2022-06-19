import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Post from "./pages/post";
import About from "./pages/about";
import CustomAppBar from "./components/head";


export default function App() {
    return (
        <BrowserRouter>
            <CustomAppBar />
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/:postId" element={<Post />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
