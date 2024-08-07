import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postLists } = useContext(PostListData);
  const postLists = useLoaderData();

  // const handleGetPostsClick = () => {};

  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {postLists.length === 0 && <WelcomeMessage />}
      {postLists.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
