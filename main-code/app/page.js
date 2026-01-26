import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col justify-start items-center gap-10 pt-[15vh] pb-10 bg-white text-black">
      <section className="w-[99%] h-[105vh] flex flex-row justify-start items-center bg-[#d2e823]">
        <div className="w-[50%] h-[80%] flex flex-col justify-center items-start pl-20 gap-6">
          <h1 className="w-[80%] h-[60%] flex justify-center items-center text-4xl font-bold">A link in bio built for you.</h1>
          <p className="w-[80%] h-[30%] flex justify-center items-center ">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="w-[80%] h-[10%] flex flex-row justify-start items-center gap-4">
          <input type="email" name="email" id="" className="w-[50%] h-[99%] rounded-[10px] bg-white border border-gray-300 px-4 py-2 " />
          <button className="w-[50%] h-[99%] rounded-[10px] bg-green-900 text-white border border-gray-300 px-4 py-2 ">Get Started</button>
          </div>
        </div>
        <div className="w-[50%] h-[80%] flex justify-center items-center overflow-y-hidden ">

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
