"use client";
import React from 'react';
import { useState,useEffect } from 'react';

interface Comment {
    id: number;
    text: string;
    timestamp: string;
    name:string,
    email:string,
}

function CommentSection () {
    const [displayComment, setDisplayComment] = useState(false);
    const [comments, setComments] = useState<Comment[]>([]);
    
    useEffect(() => {
        // Function to handle displaying comments
        function displayComments() {
            setDisplayComment(true);
        }
        
        displayComments();
    }, []);

    const handleSubmit = () => {
       
        const name = document.getElementById("name") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const commentInput = document.getElementById("comments") as HTMLTextAreaElement;
        
        if (!name.value.trim()) {
            alert("Please enter name");
            return;
        }
        if (!email.value.trim()) {
            alert("Please enter email");
            return;
        }
        if (!commentInput.value.trim()) {
            alert("Please enter a comment");
            return;
        }

        const newComment: Comment = {
            id: Date.now(),
            text: commentInput.value,
            timestamp: new Date().toLocaleString(),
            name:name.value,
            email: email.value
            
        };
        //clearing input feilds and textarea
        setComments(prevComments => [...prevComments, newComment]);
        name.value ='';
        email.value ='';
        commentInput.value = ''; 
        alert("your response has been recorded")
    };

    return (
        <section className="mt-11 flex justify-center items-center flex-col">
            <div className=" w-[400px] flex gap-3  flex-col">
                <input type="name" placeholder='Enter Name' id='name' required={true} className='h-[40px] w-[400px] border rounded-lg' />
                <input type="email" placeholder='Enter Email' id='email' required={true} className='h-[40px] w-[400px] border rounded-lg'/>
                <textarea 
                    name="Comments" 
                    id="comments" 
                    placeholder='Enter your valuable feedback' 
                    className='w-[400px] h-[200px] p-2 border rounded-lg '/>
                <button 
                    onClick={handleSubmit}
                    className=" mt-2 h-[35px] bg-black text-white rounded hover:bg-blue-900"> Submit
                </button>
            </div>
            
            {/* Display comments cards */}
            {displayComment && (
                <div className='mt-6' id='displayComments'>
                    {comments.length === 0 ? (
                        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                    ) : (
                        comments.map(comment => (
                            
                            <div 
                            key={comment.id} 
                            className=' w-[350px] p-4 border rounded-lg shadow-sm'
                            >
                               
                                <p className='text-blue-700 font-bold'>{comment.name}</p>
                                <p className='text-blue-700 font-bold'>{comment.email}</p>
                                <p className='overflow-x-hidden'>{comment.text}</p>
                                <small className="text-gray-500">{comment.timestamp}</small>
                            </div>
                        ))
                    )}
                </div>
            )}
        </section>
    );
};

export default CommentSection;