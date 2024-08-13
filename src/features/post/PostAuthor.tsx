import { useSelector } from "react-redux";
import React from 'react'
import { selectAllUsers } from "../user/userSlice";

const PostAuthor = ({userId}:any) => {
    const users= useSelector(selectAllUsers)
    const author = users.find((user:any) => user.id === userId)
  return (
    <div>
        {author ? author.name : 'Unknown author'}
    </div>
  )
}

export default PostAuthor