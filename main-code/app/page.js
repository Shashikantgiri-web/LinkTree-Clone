"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-center bg-background text-foreground">
      <section className="w-full flex flex-col lg:flex-row justify-center items-center py-20 px-6 lg:px-20 gap-12 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center items-start gap-8 animate-slide-up">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-linear-to-r from-primary via-accent to-pink-500">
            A link in bio built for you.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="w-full max-w-md flex flex-col sm:flex-row gap-4 stagger-1 animate-fade-in">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">linktr.ee/</span>
              <input
                type="text"
                name="text"
                id="handle"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="yourname"
                className="w-full h-14 pl-24 pr-4 rounded-2xl glass-input outline-none text-foreground font-medium"
              />
            </div>
            <button
              onClick={() => createTree()}
              className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center animate-fade-in stagger-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img src="/home-icon.png" alt="LinkTree Demo" className="relative w-full max-w-lg drop-shadow-2xl animate-float" />
          </div>
        </div>
      </section>
    </main>
  );
}
