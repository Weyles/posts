import React, { useContext, createContext, useState } from "react";

const PostsContext = createContext();

const usePosts = () => {
  const {
    currentUrl,
    changeUrl,
    userReposts,
    addRepostsHandler,
    removeRepostsHandler,
    itemIsRepostHandler,
  } = useContext(PostsContext);
  return {
    currentUrl,
    changeUrl,
    userReposts,
    addRepostsHandler,
    removeRepostsHandler,
    itemIsRepostHandler,
  };
};

const PostsProvider = ({ children }) => {
  const [userReposts, setUserReposts] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("/");

  const changeUrl = (url) => {
    const currentURL = url;
    setCurrentUrl(currentURL);
  };

  const addRepostsHandler = (repostPost) => {
    // setUserReposts(userReposts.concat(repostPost)) неправильная запись
    setUserReposts((userReposts) => {
      return userReposts.concat(repostPost);
    });
    //concat создает новый масив копируя выбраный и запушивая в него обьект в параметре
    //Более грамотная запись была бы так же:   const newArray = userReposts.conca......
  };

  const removeRepostsHandler = (postID) => {
    setUserReposts((prevUserReposts) => {
      return prevUserReposts.filter((post) => post.id !== postID);
    });
  };

  const itemIsRepostHandler = (postID) => {
    const someList = userReposts.some((post) => post.id === postID);
    return someList;
  };

  return (
    <PostsContext.Provider
      value={{
        currentUrl,
        changeUrl,
        userReposts,
        addRepostsHandler,
        removeRepostsHandler,
        itemIsRepostHandler,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export { PostsProvider, usePosts };
