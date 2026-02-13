import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-[90%] h-[10vh] flex flex-row justify-center items-center rounded-4xl bg-white text-black shadow-lg z-10 top-3.5 fixed'>
        <div className='w-[20%] h-[99%] flex justify-start items-center'>
            <Link href="/"><img src="/logo.svg" alt=""  className='w-25 h-[80%] ml-6'/></Link>
        </div>
        <div className='w-[50%] h-[99%] flex justify-start items-center'>
            <ul className='w-[95%] h-[99%] flex flex-row justify-start items-center gap-2'>
                <Link href="/generate"><li className="text-[13px]">Generate</li></Link>
                <Link href="/templates"><li className="text-[13px]">Templates</li></Link>
                <Link href="/marketplace"><li className="text-[13px]">Marketplace</li></Link>
                <Link href="/learn"><li className="text-[13px]">Learn</li></Link>
                <Link href="/pricing"><li className="text-[13px]">Pricing</li></Link>
            </ul>
        </div>
        <div className='w-[30%] h-[99%] flex flex-row justify-end items-center gap-1.5'>
            <Link href="/login"><button className='w-[30%] h-[80%] flex justify-center items-center bg-gray-200 text-black rounded-[10px] text-sm'>login</button></Link>
            <Link href="/signup"><button className='w-[50%] h-[80%] flex justify-center items-center bg-black text-white rounded-[54px] text-sm mr-2.5'>Sign up for free</button></Link>
        </div>
    </nav>
  )
}

export default Navbar