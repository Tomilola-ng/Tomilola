import { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import Blogs from "../Components/Blogs";
import Modal from "../Components/Modal";
import Content from "../Components/content.json";

function Home() {
  const [Posts, setPosts] = useState([]);
  const [ThePost, setThePost] = useState();
  const [orgPosts, setOrgPosts] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    setPosts(Content);
    setOrgPosts(Content);
  }, []);

  const filter_posts = (key_word) => {
    if ( key_word == 'all' ) {
      setPosts( orgPosts );
      return ;
    }
    const filtered_content = orgPosts.filter( post => post.tag == key_word);
    setPosts( filtered_content )
  };

  return (
    <div className="max-w-[900px] mx-auto">
      <Hero filter_posts={filter_posts} />
      {toggleModal && (
        <Modal
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
          ThePost={ThePost}
        />
      )}
      <Blogs
        all_posts={Posts}
        setToggleModal={setToggleModal}
        toggleModal={toggleModal}
        setThePost={setThePost}
        ThePost={ThePost}
      />
    </div>
  );
}

export default Home;
