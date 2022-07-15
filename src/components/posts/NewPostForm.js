import React from "react";
import { useRef } from "react";
//Ref созданы для чтения переменных, для из изминения нужноиспользовать state

export default function NewPostForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    const postData = {
      title: enteredTitle,
      image: enteredImage,
    };

    console.log(postData);

    props.onAddPost(postData);
  };

  return (
    <form className="postContainer" onSubmit={submitHandler}>
      <div className="inputContainer">
        <label className="userName" htmlFor="title">
          Post title
        </label>
        <input
          className="input"
          type="text"
          required
          id="title"
          ref={titleInputRef}
        />
      </div>
      <div className="inputContainer">
        <label className="userName" htmlFor="image">
          Post image
        </label>
        <input
          className="input"
          type="url"
          required
          id="image"
          ref={imageInputRef}
        />
      </div>
      <button className="addButton">Add post</button>
    </form>
  );
}
