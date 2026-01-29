import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col justify-start items-center gap-10 bg-white text-black">
      <section className="w-full h-[105vh] flex flex-row justify-start items-center bg-[#d2e823] text-[#254f1a]">
        <div className="w-[50%] h-[80%] flex flex-col justify-center items-end pl-20 gap-2.5">
          <h1 className="w-full h-[50%] flex justify-center items-end text-[73px] h1-font">A link in bio built for you.</h1>
          <p className="w-full h-[15%] flex justify-center items-center font-[17px] section-1-p">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="w-full h-[35%] flex flex-row justify-start items-start gap-4">
            <input type="email" name="email" id="" placeholder="linktr.ee/" className="w-[60%] h-12.5 rounded-[10px] bg-white border border-gray-300 px-4 py-2 text-gray-500 " />
            <button className="w-[40%] h-12.5 rounded-[10px] bg-[#254f1a] text-white border border-gray-300 px-4 py-2 ">Get Started</button>
          </div>
        </div>
        <div className="w-[50%] h-[80%] flex justify-center items-center overflow-y-hidden ">
          <Image src="/section-1-img.png" alt="section-1-img" className="w-[99%] h-[99%] mix-blend-darken" fill="true"/>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}
