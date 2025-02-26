import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-violet-400 flex justify-between items-center text-bold md:py-3 md:w-full sm:w-full">
            <div className="logo text-base font-semibold  mx-10 "><h3 className="font-bold text-2xl md:text-3xl"><span className="text-yellow-600 ">Shu</span>Do</h3></div>

        <ul className="flex   md:mx-10  ">
            <li className="font-semibold hover:text-white mx-2 text-sm sm:mx-2 md:mx-2 md:text-xl sm:text-lg"><a href="#">Home</a></li>
            <li  className="font-semibold hover:text-white mx-2 text-sm sm:mx-2 md:mx-2 md:text-xl sm:text-lg "><a href="#">About</a></li>
            <li  className="font-semibold hover:text-white mx-2 text-sm sm:mx-2 md:mx-2 md:text-xl sm:text-lg"><a href="#">Help</a></li>
        </ul>

        </nav>
        
    </div>
  )
}

export default Navbar