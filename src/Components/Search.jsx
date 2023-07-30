import { React, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ filter_posts }) {
  const tags = [
    { id: 0, name: "all" },
    { id: 1, name: "hacks" },
    { id: 2, name: "coding" },
    { id: 3, name: "entrepreneur" },
    { id: 4, name: "news" },
  ];

  const [Active, setActive] = useState(2);

  const handle_tag_click = ( tag_id, tag_name ) => {
    setActive( tag_id );
    filter_posts(  tag_name )
  }

  return (
    <div className="mt-6 md:px-2">
      <figure className="w-full border border-gray-400 rounded h-10 mt-3 flex overflow-hidden pointer-events-none">
        <input
          type="text"
          placeholder='Search...'
          id="."
          className="bg-transparent border-r border-gray-400 w-full h-full pl-2 outline-none"
        />
        <div className="flex flex-col justify-center p-1">
          <AiOutlineSearch
            className="text-gray-400 hover:text-[#54c265]"
            size={23}
          />
        </div>
      </figure>

      <figure className="flex items-center gap-2  my-3">
        {tags.map((tag) => (
          <p
            onClick={() => handle_tag_click(tag.id, tag.name)}
            key={tag.id}
            className={` ${
              Active == tag.id ? "text-[#54c265]" : ""
            } p-1 pl-0 text-sm rounded-[50rem] hover:text-[#54c265] capitalize ease-in-out duration-100 cursor-pointer`}
          >
            {tag.name}
          </p>
        ))}
      </figure>
    </div>
  );
}

export default Search;
