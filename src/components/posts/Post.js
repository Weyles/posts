import React from "react";
import { usePosts } from "../../store/PostsContext";

export default function Post(props) {
  const context = usePosts();
  const itemIsRepost = context.itemIsRepostHandler(props.id);

  const toggleRepostStatusHandler = () => {
    if (itemIsRepost) {
      context.removeRepostsHandler(props.id);
    } else {
      context.addRepostsHandler({
        id: props.id,
        title: props.title,
        user: props.user,
        image: props.image,
      });
    }
  };

  return (
    <div className="postContainer">
      <div className="userName">{props.user}</div>
      <div className="postTitle">{props.title}</div>
      <div>
        <img className="image" src={props.image} />
      </div>
      {itemIsRepost ? (
        <button className="removeButton" onClick={toggleRepostStatusHandler}>
          Remove
        </button>
      ) : (
        <button className="addButton" onClick={toggleRepostStatusHandler}>
          Repost
        </button>
      )}
    </div>
  );
}
