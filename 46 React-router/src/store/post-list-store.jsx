import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostList = createContext({
  postLists: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postID
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postLists, dispatchPostList] = useReducer(postListReducer, []);
  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    // console.log("Add post called---->", post);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = useCallback(
    (postID) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postID,
        },
      });
    },
    [dispatchPostList]
  );

  /* useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      // console.log("Cleaning up useEffect");
      controller.abort();
    };
  }, []); */

  /*   const arr = [2, 6, 1, 9, 4];
  const sortedArr = useMemo(() => arr.sort(), [arr]);
  console.log(sortedArr); */

  return (
    <PostList.Provider value={{ postLists, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
