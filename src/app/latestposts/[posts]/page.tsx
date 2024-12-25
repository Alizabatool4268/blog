import React from 'react';
import data from "@/blog-post-data.json";
import CommentSection from "@/components/CommentSection";
import Image from 'next/image';

interface PageProps {
    params: Promise<{
      posts: string;
    }>;
  }

  interface Postdata {
    id:number,
    blogOwner:string,
    blogOwnerImage:string,
    blogImage:string,
    description:string,
    blograiting:string,
    title:string

  }
async function Page({params}:PageProps) {
    const resolvedParams = await params;
  const blogId = parseInt(resolvedParams.posts);
  if (isNaN(blogId)) {
  return <div>Invalid product ID</div>;
}
  const post = data.blogPostData.find(
    (blogDetail:Postdata) => blogDetail.id === blogId
  );
  if (!post) {
    console.log('post not found');
    return (
      <section>
        <div className="text-red-500">Post not found</div>
      </section>
    );
  }
  return (
    <main>
      <section className='mt-11'>
      <div className='flex justify-center items-center flex-col'>
       <span className='flex gap-2'>
        <h1 className='text-[18px] font-bold text-slate-600'>Presented by</h1>
        <Image height={30} width={30} src={post.blogOwnerImage} alt={post.title}></Image>
        <p className='text-sm'>{post.blogOwner}</p>
       </span>
        <h1 className='font-bold text-[30px]'>{post.title}</h1>
        <p className='w-[400px] ssm:w-[300px] xsm:w-[280px]'>{post.description}</p>
        <br />
        <h5 className='font-bold text-[20px]'>{post.blogsubheading}</h5>
        <p className='w-[400px] ssm:w-[300px] xsm:w-[280px]'>{post.descriptionparatwo}</p>
        <br />
        <h5 className='font-bold text-[20px]'>In Conclusion</h5>
        <p className='w-[400px] ssm:w-[300px] xsm:w-[280px]'>{post.conclusion}</p>
      </div>
      </section>
      
      <section className='flex justify-center items-center flex-col mt-11'>
        <h1 className='text-[30px] font-bold'>Give your Feedback</h1>
        <CommentSection />
      </section>
    </main>
    )
}

export default Page