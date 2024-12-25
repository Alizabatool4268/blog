import React from 'react';
import data from "@/blog-post-data.json";
import CommentSection from "@/components/CommentSection";

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
      <section>
      <div>{post.title}</div>
      </section>
      
      <section>
        <CommentSection />
      </section>
    </main>
    )
}

export default Page