import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import Content from "./content.json";

const Modal = ({ setToggleModal, toggleModal, ThePost }) => {
  const handle_toggle = () => setToggleModal(!toggleModal);
  let post = Content.find((e) => e.id == ThePost);

  return (
    <div className="w-screen h-screen overflow-y-scroll fixed top-0 left-0 z-20 overflow-hidden">
      <div className="w-screen h-screen bg-black opacity-[0.95] fixed top-0 left-0 -z-20" />
      <BsXCircleFill
        onClick={handle_toggle}
        className="text-[4rem] p-4 fixed top-0 left-0 "
      />
      <div className="w-full md:w-[50%] mx-auto h-screen overflow-y-scroll py-6">
        <img src={post.image} className="h-full max-h-[50vh]" />

        <h1 className="text-2xl font-bold my-6 uppercase"> {post.title} </h1>
        <p>
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default Modal;
