import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <section>
    <div className='w-full h-[200px] bg-slate-200 mt-5'>
           <h1 className='text-[36px] font-bold'>About Us</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/latestposts"}>Posts</Link>
              <p className='text-blue-800'>About Us</p>
           </span>
        </div> 
    </section>
  )
}

export default Page