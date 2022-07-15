import React from "react";
import Post from "./Post";

export default function PostList(props) {
  return (
    <>
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            image={post.image}
            user={post.user}
            title={post.title}
          />
        );
      })}
    </>
  );
}
