import React from "react";

const WelcomeMessage = ({ handleGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no posts!!</h1>
      {/*  <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleGetPostsClick}
      >
        Get posts from server
      </button> */}
    </center>
  );
};

export default WelcomeMessage;
