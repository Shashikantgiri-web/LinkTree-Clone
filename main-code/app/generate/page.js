import React from 'react'

const generate = () => {
    return (
        <section className='w-full h-auto grid grid-cols-2 justify-center items-center gap-2.5 bg-[#e9c0e9] text-[#261d39] overflow-y-scroll scrollbar-hide'>
            <div className="w-[99%] h-[105vh] flex flex-col justify-center items-center bg-transparent border-2 border-pink-300 rounded-3xl py-[10vh] gap-2">
                <div className='w-[99%] h-10 flex justify-center items-center'>
                    <h1 className='text-2xl font-bold'>Generate Your LinkTree</h1>
                </div>
                <div className='w-[99%] h-30 flex flex-col justify-start items-center'>
                    <h2 className='text-xl font-semibold'>Step 1: Claim Your Handle</h2>
                    <div className="my-4 w-[45%] flex flex-col gap-2.5">
                        <input type="text" placeholder='choose your handle' className='w-[80%] h-15 pl-2.5 rounded-3xl bg-[#00489dd6] text-[#c66df1de] focus:ring-pink-400'/>
                    </div>
                </div>
                <div className='w-[99%] h-42.5 flex flex-col justify-start items-center'>
                    <h2 className='text-xl font-semibold'>Step 2: Add Your Links</h2>
                    <div className="my-4 w-[45%] flex flex-col gap-2.5">
                        <input type="text" placeholder='Enter link text' className='w-[80%] h-15 pl-2.5 rounded-3xl bg-[#00489dd6] text-[#c66df1de] focus:ring-pink-400'/>
                        <input type="text" placeholder='Enter link' className='w-[80%] h-15 pl-2.5 rounded-3xl bg-[#00489dd6] text-[#c66df1de] focus:ring-pink-400'/>
                    </div>
                </div>
                <div className='w-[99%] h-42.5 flex flex-col justify-start items-center'>
                    <h2 className='text-xl font-semibold'>Step 3: Add Picture and Description</h2>
                </div>
            </div>
            <div className="w-[99%] h-[105vh] flex justify-center items-center overflow-y-hidden">
                <img src="/generate.png" alt="generate-img" className="w-[99%] h-[99%]" />
            </div>
        </section>
    )
}

export default generate