import React from 'react'

const generate = () => {
    return (
        <section className='w-full h-[105vh] grid grid-cols-2 justify-center items-center gap-2.5 bg-[#e9c0e9] text-[#d2e823]'>
            <div className="w-[99%] h-[99%] flex flex-col justify-center items-center bg-transparent border-2 border-pink-300 rounded-3xl gap-4 p-4">
                <div className='w-[99%] h-10 flex justify-center items-center'>
                    <h1 className='text-2xl font-bold'>Generate Your LinkTree</h1>
                </div>
                <div className='w-[99%] h-50 flex flex-col justify-center items-center'>
                    <h2 className='text-xl font-semibold'>Step 1: Claim Your Handle</h2>
                    <div className="my-4 flex flex-col gap-2.5">
                        <input type="text" placeholder='choose your handle'  className='w-[80%] h-5 rounded-3xl bg-pink-300 text-pink-900 focus:ring-pink-400'/>
                    </div>
                </div>
                <div className='w-[99%] h-50 flex flex-col justify-center items-center'>
                    <h2 className='text-xl font-semibold'>Step 2: Add Your Links</h2>
                    <div className="my-4 flex flex-col gap-2.5">
                        <input type="text" placeholder='Enter link text' className='w-[99%] h-5 rounded-3xl bg-pink-300 text-pink-900 focus:ring-pink-400 ml-2.5'/>
                        <input type="text" placeholder='Enter link' className='w-[99%] h-5 rounded-3xl bg-pink-300 text-pink-900 focus:ring-pink-400 ml-2.5'/>
                    </div>
                </div>
                <div className='w-[99%] h-50 flex flex-col justify-center items-center'>
                    <h2 className='text-xl font-semibold'>Step 3: Add Picture and Description</h2>
                </div>
            </div>
            <div className="w-[99%] h-[80%] flex justify-center items-center overflow-y-hidden">
                <img src="/generate.png" alt="generate-img" className="w-[99%] h-[99%]" />
            </div>
        </section>
    )
}

export default generate