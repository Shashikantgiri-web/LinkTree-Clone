"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const generate = () => {
    const [handle, sethandle] = useState("");
    const [linkText, setlinkText] = useState("");
    const [link, setlink] = useState("");
    const [linkImages, setlinkImages] = useState("");

    const addLink = async (handle, text, link, linkImages) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "handle": handle,
            "linkText": text,
            "link": link,
            "linkImages": linkImages
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("https://linktree-pink-eight.vercel.app/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success("Link added successfully!")
        } else {
            toast.error("Failed to add link.")
        }   
    }

    return (
        <>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Bounce} />

            <section className='w-full h-auto grid grid-cols-2 items-center gap-2.5 bg-[#e9c0e9] text-[#261d39] overflow-y-scroll scrollbar-hide justify-center' style={{ display: 'grid', justifyItems: 'center', alignItems: 'center' }}>
                <div className="w-[80%] h-[77vh] flex flex-col justify-center items-center bg-transparent border-2 border-pink-300 rounded-3xl p-1 px-1.5 gap-2">
                    <div className='w-[99%] h-10 flex justify-center items-start'>
                        <h1 className='text-2xl font-bold'>Generate Your LinkTree</h1>
                    </div>
                    <div className='w-[99%] h-30 flex flex-col justify-start items-start'>
                        <h2 className='text-xl font-semibold'>Step 1: Claim Your Handle</h2>
                        <div className="my-4 w-[60%] flex flex-col gap-2.5">
                            <input type="text" placeholder='choose your handle' value={handle || ""} onChange={(e) => sethandle(e.target.value)} className='w-[99%] h-11.25 pl-2.5 rounded-3xl bg-[#00489dd6] text-white focus:ring-pink-400' />
                        </div>
                    </div>
                    <div className='w-[99%] h-30.5 flex flex-col justify-start items-start'>
                        <h2 className='text-xl font-semibold'>Step 2: Add Your Links</h2>
                        <div className="my-4 w-[99%] flex flex-row gap-2.5">
                            <input type="text" placeholder='Enter link text' value={linkText || ""} onChange={(e) => setlinkText(e.target.value)} className='w-[34%] h-11.25 pl-2.5 rounded-3xl bg-[#00489dd6] text-white focus:ring-pink-400' />
                            <input type="text" placeholder='Enter link' value={link || ""} onChange={(e) => setlink(e.target.value)} className='w-[34%] h-11.25 pl-2.5 rounded-3xl bg-[#00489dd6] text-white focus:ring-pink-400' />
                            <button className='w-[30%] h-11.25 rounded-3xl bg-pink-400 text-white font-bold hover:bg-pink-500' onClick={() => addLink(handle, linkText, link, linkImages)}>+ Add Link</button>
                        </div>
                    </div>
                    <div className='w-[99%] h-42.5 flex flex-col justify-start items-start gap-2.5'>
                        <h2 className='text-xl font-semibold'>Step 3: Add Picture and Description</h2>
                        <div className="my-4 w-[99%] flex flex-col gap-2.5">
                            <input type="text" placeholder='Enter picture URL' value={linkImages || ""} onChange={(e) => setlinkImages(e.target.value)} className='w-[65%] h-11.25 pl-2.5 rounded-3xl bg-[#00489dd6] text-white focus:ring-pink-400' />
                            <button className='w-[40%] h-11.25 rounded-3xl bg-pink-400 text-white font-bold hover:bg-pink-500' >Submit your linktree</button>
                        </div>
                    </div>
                </div>
                <div className="w-[99%] h-[105vh] flex justify-center items-center overflow-y-hidden">
                    <img src="/generate.png" alt="generate-img" className="w-[99%] h-[99%]" />
                </div>
            </section>
        </>
    )
}

export default generate