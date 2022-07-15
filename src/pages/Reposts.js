import React from "react";
import { usePosts } from "../store/PostsContext";
import PostList from "../components/posts/PostList";

export default function Reposts() {
  const context = usePosts();
  return (
    <section className="postsContainer">
      {context.userReposts.length === 0 ? (
        <p className="postTitle">You have no posts already</p>
      ) : (
        <PostList posts={context.userReposts} />
      )}
    </section>
  );
}
