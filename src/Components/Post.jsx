import React from 'react'

const Post = ( { id, image, title, desc, tag, setToggleModal, toggleModal, setThePost } ) => {
  const handle_toggle = () => {
    setToggleModal( !toggleModal )
    setThePost( id )
  }
  
  return (
    <div 
    onClick={ handle_toggle }
    className='cursor-pointer bg-gray-900 rounded overflow-hidden hover:translate-y-[-10px] hover:shadow-sm hover:shadow-slate-400 ease-in-out duration-100 my-4'>
      <img src={image} alt="Images" className='w-full'  />
      <div className="p-3">
          <h1 className='font-medium text-lg uppercase'> { title } </h1>
          <p className="text-gray-400 text-xs md:text-sm line-clamp-2 mt-3"> 
            { desc }
          </p>
          <p className="mt-3">
            <a href="." className="p-1 text-xs text-gray-900 bg-gray-400 uppercase rounded"> { tag } </a>
          </p>
      </div>
    </div>
  )
}

export default Post