import React from "react";
import PropTypes from "prop-types";

const Comments = ({ comments, slug }) => (
  <div>
    <hr />
    <h2>Comments</h2>
    {comments && comments.length ? (
      comments.map(comment => (
        <div key={comment.node.id}>
          <p>
            Name: {comment.node.name}
            <br />
            Comment: {comment.node.message}
            <br />
            Date: {comment.node.date}
          </p>
        </div>
      ))
    ) : (
      <p>No comments yet.</p>
    )}
    <h3>Add a comment</h3>
    <form
      method="POST"
      action="https://powerful-sands-26975.herokuapp.com/v2/entry/lukeharvey/wetookatrip/master/comments"
    >
      <input name="fields[slug]" type="hidden" value={slug} />
      <input name="fields[name]" type="text" placeholder="Name" required />
      <input name="fields[email]" type="email" placeholder="Email" required />
      <textarea name="fields[message]" placeholder="Comment" required />
      <button type="submit">Submit Comment</button>
    </form>
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array,
  slug: PropTypes.string
};

export default Comments;
