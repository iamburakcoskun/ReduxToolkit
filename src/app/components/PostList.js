import React from "react";
import { useSelector } from "react-redux";

function PostList() {
  const posts = useSelector((state)=> state.postReducer.value)

  debugger;
  const renderedPosts = posts.map((post, index) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostList;
