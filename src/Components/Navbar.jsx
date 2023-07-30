import {React,  useState } from 'react'
import { AiOutlineMenu, AiOutlineClose  } from 'react-icons/ai'
import { FiPenTool  } from 'react-icons/fi'

const Navbar = () => {
    const [nav, setnav] = useState(true)

    const handlenav = () => {
        setnav(!nav)
    }

    let links = [
        {
            name : 'email',
            id : 1,
            link : 'mailto:tee.o2809@gmail.com'
        },
        {
            name : 'instagram',
            id : 21,
            link : 'https://instagram.com/tomilola_ng'
        },
        {
            name : 'linkedin',
            id : 31,
            link : 'https://linkedin.com/in/oluwafemi-tomilola-💡-3139b254'
        },
        {
            name : 'github',
            id : 41,
            link : 'https://github.com/Tomilola-ng'
        }
    ]

  return (
    <div className='flex justify-between items-center h-20 max-w-[1240px] m-auto px-4'>
        <h1 className="w-full text-2xl font-bold text-[--col] z-20 flex"> Tomilola_ng 
         </h1>
        <ul className='md:flex hidden'>
            { links.map( link => 
            <a key={ link.id } className='hover:font-medium hover:text-[#c3e7c9] cursor-pointer p-4 capitalize' href={ link.link }> { link.name } </a> )}
        </ul>
        <div onClick={handlenav} className='md:hidden hover:text-[--col]'>
            { !nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>

        <div className={ !nav ? 'fixed left-0 top-0 w-60 border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden z-10' : 'fixed hidden md:hidden'}>
            <ul className='pt-24 p-4 uppercase '>
                { links.map( link => 
                <a key={ link.id } className='hover:font-medium hover:text-[--col] cursor-pointer capitalize block p-4' href={ link.link }> { link.name } </a> )}
            </ul>
        </div>
    </div>
  )
}

export default Navbar