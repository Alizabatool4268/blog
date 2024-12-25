import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  return (
    <section className='w-screem overflow-x-hidden'>
    <div className='w-full h-[200px] bg-slate-200 mt-5'>
           <h1 className='text-[36px] font-bold'>About Us</h1>
           <span className='flex gap-3'>
              <Link href={"/"}>Home</Link>
              <Link href={"/latestposts"}>Posts</Link>
              <p className='text-blue-800'>About Us</p>
           </span>
        </div> 
        <div className='flex justify-around items-center xsm:flex-col ssm:flex-col msm:flex-col mt-11 '>
         <div className="w-[350px] flex justify-center items-center flex-col">
          <h1 className="text-[40px] font-bold">Overview</h1>
          <p className='xsm:w-[280px] text-center'>
          We started overview as a simple project for our learning but after seeing the response of multiple students
          who got help from our platform we decided to continue it. After lots of coding we made the platform better 
          and our initiative is to make it even better.We are adding updates day and night to provide students the best
          quality of education. Today we are proud to say that we are not looking back, we will be working on the platform 
          and providing you quality blogs.By the grace of your support we will make this platform the best
          bloging platform of Pakistan.</p>
         </div>
         <Image height={300} width={300} src={"/Images/Image.png"} alt="heroImage"></Image>
        </div>
    </section>
  )
}

export default Page