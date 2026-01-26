import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[80%] h-[10vh] flex flex-row justify-center items-center rounded-2xl bg-white text-black shadow-lg z-10 top-3.5 fixed'>
        <div className='w-[30%] h-[99%] flex justify-start items-center ml-4'>
            <img src="/logo.svg" alt=""  className='w-[130px] h-[80%]'/>
        </div>
        <div className='w-[40%] h-[99%] flex justify-start items-center'>
            <ul className='w-[65%] h-[99%] flex flex-row justify-start items-center gap-2'>
                <li className="text-[18px]">Products</li>
                <li className="text-[18px]">Templates</li>
                <li className="text-[18px]">Marketplace</li>
                <li className="text-[18px]">Learn</li>
                <li className="text-[18px]">Pricing</li>
            </ul>
        </div>
        <div className='w-[30%] h-[99%] flex flex-row justify-end items-center gap-1.5'>
            <button className='w-[25%] h-[80%] flex justify-center items-center bg-gray-200 text-white rounded-[10px] text-sm'>login</button>
            <button className='w-[25%] h-[80%] flex justify-center items-center bg-black text-white rounded-[10px] text-sm'>Sign up for free</button>
        </div>
    </nav>
  )
}

export default Navbar