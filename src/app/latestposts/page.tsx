import React from 'react';
import Image from "next/image";
import data from "@/blog-post-data.json";
import Link from 'next/link';
import { IoIosStar } from "react-icons/io";

function Page() {
  return (
    
    <section className="mt-4 overflow-x-hidden">
      <div className='w-full h-[200px] bg-slate-200 mt-5'>
           <h1 className='text-[36px] font-bold'>Blogs</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/SignUp"}>Account</Link>
              <p className='text-blue-800'>Posts</p>
           </span>
      </div> 
     <h1 className="text-[30px] font-bold mt-3">Latest Posts</h1>
     <div className="grid grid-cols-2 grid-rows-4 gap-6 mt-3">
      {data.blogPostData.map((blogdata)=>(
        <div className="flex justify-center items-center" key={blogdata.id}>
        <div className="w-[350px] flex flex-col gap-4 shadow-lg" key={blogdata.id}>
          <div className='flex gap-4 items-center'>
            <h6 className='font-bold text-pink-500 '>Post by</h6>
            <span className='flex justify-center items-center gap-2'>
            <Image height={30} width={30} src={blogdata.blogOwnerImage} alt={blogdata.title}></Image>
            <p className='text-sm'>{blogdata.blogOwner}</p>
            </span>
          </div>
          <Image height={300} width={350} src={blogdata.blogImage} alt={blogdata.title}></Image>
          <p className='flex'><IoIosStar className='text-yellow-400'/>{blogdata.blograiting}</p>
          <h1 className='font-bold text-[20px] text-blue-700'>{blogdata.title}</h1>
          <p>{blogdata.description}</p>
            <Link href={`/latestposts/${blogdata.id}`} className='h-[30px] bg-black text-white rounded-sm flex justify-center items-center'>Read more</Link>
        </div>
        </div>
      ))}
    </div>
   </section>
  )
}

export default Page