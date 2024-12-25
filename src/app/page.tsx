import Image from "next/image";
import data from "@/blog-post-data.json"

export default function Home() {
  return (
   <main className="w-screen overflow-x-hidden">
     <section className="flex justify-around items-center mt-12">
      <div className="w-[350px] text-center">
        <h1 className="text-[40px] font-bold">Overview</h1>
        <p>This is the best platform to increase your information on various topics.We have the best blogs on 
          various topics. Overview will give you the best experience you will ever have.</p>
      </div>
      <Image height={400} width={400} src={"/Images/Image.png"} alt="heroImage"></Image>
     </section>
    
   </main>
  );
}
