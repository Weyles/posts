import React from "react";
import NewPostForm from "../components/posts/NewPostForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const navigate = useNavigate();

  const addPostHandler = (postData) => {
    //Запрос на сервер выполняется постоянно, и для того чтобы прекратить этот постоянный цикл, мы используем useEffects
    axios
      .post(
        "https://posts-fd63f-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="postsContainer">
      <NewPostForm onAddPost={addPostHandler} />
    </section>
  );
}
