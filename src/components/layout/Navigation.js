import React from "react";
import { NavLink } from "react-router-dom";
import { usePosts } from "../../store/PostsContext";

export default function Navigation() {
  const context = usePosts();

  return (
    <header className="header">
      {context.currentUrl !== "/" ? (
        <div onClick={() => context.changeUrl("/")} className="linkContainer">
          <NavLink className={"link"} to={"/"}>
            Posts
          </NavLink>
        </div>
      ) : (
        <div className="activeLinkContainer">
          <NavLink className={"link"} to={"/"}>
            Posts
          </NavLink>
        </div>
      )}
      {context.currentUrl !== "/new-post" ? (
        <div
          onClick={() => context.changeUrl("/new-post")}
          className="linkContainer"
        >
          <NavLink className={"link"} to={"/new-post"}>
            New posts
          </NavLink>
        </div>
      ) : (
        <div className="activeLinkContainer">
          <NavLink className={"link"} to={"/new-post"}>
            New posts
          </NavLink>
        </div>
      )}
      {context.currentUrl !== "/reposts" ? (
        <div
          onClick={() => context.changeUrl("/reposts")}
          className="linkContainer"
        >
          <NavLink className={"link"} to={"/reposts"}>
            Reposts
          </NavLink>
        </div>
      ) : (
        <div className="activeLinkContainer">
          <NavLink className={"link"} to={"/reposts"}>
            Reposts
          </NavLink>
        </div>
      )}
    </header>
  );
}
