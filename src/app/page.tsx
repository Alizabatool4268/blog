import Image from "next/image";
import data from "@/blog-post-data.json";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";


export default function Home() {
  return (
   <main className="w-screen overflow-x-hidden">
     <section className="flex justify-around items-center mt-12 xsm:flex-col ssm:flex-col msm:flex-col gap-1 ">
      <div className="w-[280px] text-center">
        <h1 className="text-[40px] font-bold">Overview</h1>
        <p>This is the best platform to increase your information on various topics.We have the best blogs on 
          various topics. Overview will give you the best experience you will ever have.</p>
      </div>
      <Image height={400} width={400} src={"/Images/Image.png"} alt="heroImage"></Image>
     </section>
     <section className="mt-14 overflow-x-hidden">
        <h1 className="text-[30px] font-bold text-center">Our blogs</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 msm:grid-cols-1 msm:grid-rows-2 ssm:grid-cols-1 ssm:grid-rows-2 xsm:grid-cols-1 xsm:grid-rows-2">
          {data.blogPostData.slice(0,4).map((blogdata)=>(
             <div className="flex justify-center items-center" key={blogdata.id}>
             <div className="w-[350px] xsm:w-[280px] flex flex-col gap-4 shadow-lg" key={blogdata.id}>
               <div className='flex gap-4 items-center'>
                 <h6 className='font-bold text-pink-500 '>Post by</h6>
                 <span className='flex justify-center items-center gap-2'>
                 <Image height={30} width={30} src={blogdata.blogOwnerImage} alt={blogdata.title}></Image>
                 <p className='text-sm'>{blogdata.blogOwner}</p>
                 </span>
               </div>
               <Image height={300} width={350} src={blogdata.blogImage} alt={blogdata.title} className="xsm:w-[280px]"></Image>
               <p className='flex'><IoIosStar className='text-yellow-400'/>{blogdata.blograiting}</p>
               <h1 className='font-bold text-[20px] text-blue-700'>{blogdata.title}</h1>
               <p>{`${blogdata.description.slice(0,100)}...`}</p>
                 <Link href={`/latestposts/${blogdata.id}`} className='h-[30px] bg-black text-white rounded-sm flex justify-center items-center'>Read more</Link>
             </div>
             </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
        <Link href={"/latestposts"} className="bg-black text-white h-[30px] w-[100px] flex justify-center items-center rounded-lg">View More</Link>
        </div>
     </section>
   </main>
  );
}
