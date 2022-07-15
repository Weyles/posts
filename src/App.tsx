import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import AllPosts from "./pages/AllPosts";
import NewPost from "./pages/NewPost";
import Reposts from "./pages/Reposts";
import { PostsProvider } from "./store/PostsContext";

function App() {
  return (
    <PostsProvider>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<AllPosts />} />
        <Route path={"/new-post"} element={<NewPost />} />
        <Route path={"/reposts"} element={<Reposts />} />
      </Routes>
    </PostsProvider>
  );
}

export default App;
