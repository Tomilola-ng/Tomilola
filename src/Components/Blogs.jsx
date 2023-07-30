import React from "react";
import Post from "./Post";

function Blogs({ all_posts, toggleModal, setToggleModal, setThePost }) {
  return (
    <div className="mx-auto mt-10 px-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      {all_posts.map((e) => (
        <Post key={e.id} id = { e.id } image={e.image} title={e.title} desc={e.content} tag = { e.tag } toggleModal = { toggleModal } setToggleModal= { setToggleModal } setThePost = { setThePost } />
      ))}
    </div>
  );
}

export default Blogs;
