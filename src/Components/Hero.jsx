import React from "react";
import Tomi from "../../public/Tomi.png";
import Search from "./Search";

const Hero = ( { filter_posts } ) => {
  return (
    <div className="md:max-w-[80%] my-8 mx-auto px-4">
      <figure className="h-[15vh] mt-6 m-auto flex items-center">
        <img src={Tomi} alt="Tomi.png" className="h-[100%] self-center" />

        <div className="md:max-w-[600px] max-w-[400px] w-full pl-2">
          <h1 className="font-medium text-xl md:text-2xl md:mb-2 mb-1"> Oluwafemi Tomilola </h1>
          <p className="text-gray-400 text-sm">
            Software Engineer / Entrepreneur by day, Tech Blogger by Night.
          </p>
        </div>
        
      </figure>
      <Search filter_posts = { filter_posts } />
    </div>
  );
};

export default Hero;
