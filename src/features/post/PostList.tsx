import { useSelector } from "react-redux";
import React from 'react'
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";


const PostList = () => {
    const posts = useSelector(selectAllPosts)
  return (
    <div>
        <h2>All Posts</h2>
        <div style={{display:'flex', flexDirection:'column',gap:'10px'}}>
        {posts?.map((post:any) => (
            <div style={{border:'1px solid black', padding:'10px'}} key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
                <p>
                <PostAuthor userId={post.userId}/>
                </p>
                <ReactionButtons post={post}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default PostList