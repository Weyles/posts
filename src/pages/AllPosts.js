import axios from "axios";
import React, { useEffect, useState } from "react";
import PostList from "../components/posts/PostList";

export default function AllPosts() {
  //Запрос на сервер выполняется постоянно, и для того чтобы прекратить этот постоянный цикл, мы используем useEffects
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://posts-fd63f-default-rtdb.firebaseio.com/posts.json")
      .then(function (response) {
        // console.log("Response -->",response);
        return response.data;
      })
      .then(function (data) {
        const posts = [];
        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };
          posts.push(post);
        }
        console.log("Clean data -->", posts);

        setIsLoading(false);
        setLoadedPosts(posts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <section className="postsContainer">
      <PostList posts={loadedPosts} />
    </section>
  );
}
