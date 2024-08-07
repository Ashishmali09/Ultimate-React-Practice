// import { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  /*  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  // const reactionsElement = useRef();
  const likesElement = useRef();
  const disLikesElement = useRef();
  const tagsElement = useRef(); */

  // const handleSubmit = (event) => {
  /*  event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    // const reactions = reactionsElement.current.value;
    const likes = likesElement.current.value;
    const dislikes = disLikesElement.current.value;
    const tags = tagsElement.current.value.split(" "); */
  /*  userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    // reactionsElement.current.value = "";
    likesElement.current.value = "";
    disLikesElement.current.value = "";
    tagsElement.current.value = ""; */
  // console.log(`Sending post to server`);
  /* fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: { likes, dislikes },
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        // console.log(`Got response from server:--> ${post}`);
        addPost(post);
        navigate("/");
      }); */
  // };

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          // ref={userIdElement}
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          // ref={postTitleElement}
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today.."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          // ref={postBodyElement}
          name="body"
          className="form-control"
          id="body"
          rows={4}
          placeholder="Tell us more about it"
        ></textarea>
      </div>
      {/* <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div> */}
      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          No. of likes
        </label>
        <input
          type="text"
          // ref={likesElement}
          name="likes"
          className="form-control"
          id="likes"
          placeholder="How many people likes this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          No. of dislikes
        </label>
        <input
          type="text"
          // ref={disLikesElement}
          name="dislikes"
          className="form-control"
          id="dislikes"
          placeholder="How many people dislikes this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          // ref={tagsElement}
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter hashtags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  // console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(`Got response from server:-->  ${post}`);
      // addPost(post);
      // navigate("/");
    });
  return redirect("/");
};

export default CreatePost;
