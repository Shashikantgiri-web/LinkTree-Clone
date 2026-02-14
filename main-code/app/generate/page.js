"use client"
import React, { Suspense } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';

const GenerateContent = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [handle, sethandle] = useState(searchParams.get("handle") || "");
    const [links, setLinks] = useState([{ text: "", url: "" }]);
    const [linkImages, setlinkImages] = useState("");

    const handleChange = (index, text, url) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { text, url };
                }
                else {
                    return item;
                }
            });
        });
    };

    const addLink = () => {
        setLinks(links.concat([{ text: "", url: "" }]));
    }

    const submitLink = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "handle": handle,
            "links": links,
            "linkImages": linkImages
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success("Link added successfully!")
            sethandle("");
            setLinks([]);
            setlinkImages("");
            router.push(`/${handle}`)
        } else {
            toast.error(result.message)
        }
    }

    return (
        <div className="w-full min-h-screen bg-background py-20 px-4">
            <ToastContainer position="bottom-right" theme="dark" />

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="glass rounded-[2.5rem] p-8 lg:p-12 space-y-10 animate-slide-up">
                    <header className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">Generate Your LinkTree</h1>
                        <p className="text-muted-foreground">Customize your bio link in minutes.</p>
                    </header>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">1</span>
                                Claim Your Handle
                            </h2>
                            <input
                                type="text"
                                placeholder="choose-your-handle"
                                value={handle || ""}
                                onChange={(e) => sethandle(e.target.value)}
                                className="w-full h-14 px-6 rounded-2xl glass-input text-foreground font-medium outline-none"
                            />
                        </div>

                        {/* Step 2 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">2</span>
                                Add Your Links
                            </h2>
                            <div className="space-y-4 max-h-[30vh] overflow-y-auto pr-2 scrollbar-hide">
                                {links.map((items, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-3 animate-fade-in">
                                        <input
                                            type="text"
                                            placeholder="Label (e.g. GitHub)"
                                            value={items.text || ""}
                                            onChange={(e) => handleChange(index, e.target.value, items.url)}
                                            className="flex-1 h-12 px-4 rounded-xl glass-input text-sm outline-none"
                                        />
                                        <input
                                            type="text"
                                            placeholder="URL"
                                            value={items.url || ""}
                                            onChange={(e) => handleChange(index, items.text, e.target.value)}
                                            className="flex-2 h-12 px-4 rounded-xl glass-input text-sm outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="text-sm font-bold text-accent hover:underline flex items-center gap-2 p-2"
                                onClick={() => addLink()}
                            >
                                + Add another link
                            </button>
                        </div>

                        {/* Step 3 */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-primary flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">3</span>
                                Profile Image
                            </h2>
                            <input
                                type="text"
                                placeholder="Paste picture URL here"
                                value={linkImages || ""}
                                onChange={(e) => setlinkImages(e.target.value)}
                                className="w-full h-14 px-6 rounded-2xl glass-input text-foreground font-medium outline-none"
                            />
                        </div>
                    </div>

                    <button
                        onClick={() => submitLink()}
                        disabled={!handle || !links.length || !linkImages}
                        className="w-full h-16 rounded-2xl bg-linear-to-r from-primary to-accent text-white font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed shadow-xl shadow-primary/20"
                    >
                        Publish Your LinkTree
                    </button>
                </div>

                <div className="hidden lg:flex justify-center items-center animate-fade-in stagger-2">
                    <img src="/generate-icons.png" alt="Preview Interface" className="w-[90%] max-w-lg drop-shadow-2xl animate-float" />
                </div>
            </div>
        </div>
    )
}

const generate = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GenerateContent />
        </Suspense>
    )
}

export default generate