import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[80%] h-[15vh] flex flex-col justify-center items-center rounded-2xl bg-white shadow-lg z-10 top-3.5'>
        <div className='w-[30%] h-[99%] flex justify-center items-start'>
            <img src="/logo.svg" alt=""  className='w-full h-[80%]'/>
        </div>
        <div className='w-[40%] h-[99%] flex justify-center items-center'>
            <ul className='w-[60%] h-[99%] flex flex-col justify-start items-center gap-2'>
                <li className="text-sm">Products</li>
                <li className="text-sm">Templates</li>
                <li className="text-sm">Marketplace</li>
                <li className="text-sm">Learn</li>
                <li className="text-sm">Pricing</li>
            </ul>
        </div>
        <div className='w-[30%] h-[99%] flex flex-col justify-center items-center gap-1.5'>
            <button className='w-[49%] h-[99%] flex justify-center items-center bg-gray-600 text-white rounded-full text-sm'>Sign In</button>
            <button className='w-[49%] h-[99%] flex justify-center items-center bg-blue-600 text-white rounded-full text-sm'>login</button>
        </div>
    </nav>
  )
}

export default Navbar