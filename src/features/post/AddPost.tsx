import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addPost } from './postSlice'
import { selectAllUsers } from '../user/userSlice'

const AddPost = () => {
    const dispatch = useDispatch()
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')

    const users = useSelector(selectAllUsers)
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const userOptions = users.map((user:any) => (<option key={user.id} value={user.id}>{user.name}</option>))
  return (
    <div>
        <h2>Drop your post 😁</h2>
        <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='Enter Content' value={content} onChange={(e) => setContent(e.target.value)}/>
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value={""}></option>
          {userOptions}</select>
        <button disabled={!canSave} type='button' onClick={()=>{
            if(title && content){
                dispatch(addPost(title,content,userId))
            }
            setTitle('')
            setContent('')
        }}>Add Post</button>
    </div>
  )
}

export default AddPost