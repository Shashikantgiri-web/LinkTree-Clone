import React from 'react'

const generate = () => {
    return (
        <section className='w-full h-screen grid grid-cols-2 justify-center items-center py-[5vh] gap-2.5 bg-[#e9c0e9] text-[#d2e823]'>
            <div className="w-[99%] h-[99%] flex justify-center items-center">

            </div>
            <div className="w-[99%] h-[80%] flex justify-center items-center overflow-y-hidden">
                <img src="/generate.png" alt="generate-img" className="w-[99%] h-[99%]" />
            </div>
        </section>
    )
}

export default generate