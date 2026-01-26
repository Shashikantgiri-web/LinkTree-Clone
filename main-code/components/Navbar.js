import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[90%] h-[10vh] flex flex-row justify-center items-center rounded-4xl bg-white text-black shadow-lg z-10 top-3.5 fixed'>
        <div className='w-[20%] h-[99%] flex justify-start items-center'>
            <img src="/logo.svg" alt=""  className='w-[100px] h-[80%] ml-6'/>
        </div>
        <div className='w-[50%] h-[99%] flex justify-start items-center'>
            <ul className='w-[95%] h-[99%] flex flex-row justify-start items-center gap-2'>
                <li className="text-[13px]">Products</li>
                <li className="text-[13px]">Templates</li>
                <li className="text-[13px]">Marketplace</li>
                <li className="text-[13px]">Learn</li>
                <li className="text-[13px]">Pricing</li>
            </ul>
        </div>
        <div className='w-[30%] h-[99%] flex flex-row justify-end items-center gap-1.5'>
            <button className='w-[30%] h-[80%] flex justify-center items-center bg-gray-200 text-black rounded-[10px] text-sm'>login</button>
            <button className='w-[50%] h-[80%] flex justify-center items-center bg-black text-white rounded-[54px] text-sm mr-2.5'>Sign up for free</button>
        </div>
    </nav>
  )
}

export default Navbar