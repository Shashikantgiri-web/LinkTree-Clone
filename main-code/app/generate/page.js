import React from 'react'

const generate = () => {
    return (
        <section className='w-full h-screen grid grid-cols-2 justify-center items-center py-[10vh] gap-2.5 bg-[#254f1a] text-[#d2e823]'>
            <div className="w-[99%] h-[99%] flex justify-center items-center">
                
            </div>
            <div className="w-[99%] h-[80%] flex justify-center items-center overflow-y-hidden">
                <Image src="/generate.png" alt="generate-img" className="w-[80%] h-[460px]" />
            </div>
        </section>
    )
}

export default generate