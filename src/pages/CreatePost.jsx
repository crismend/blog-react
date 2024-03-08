import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {

  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")

  const navigate = useNavigate()

  const handleOnchange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else if (e.target.name === "post") {
      setPostText(e.target.value)
    }
  }

  const postCollectionRef = collection(db, "posts")

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title: title,
      postText,
      author: {name: auth.currentUser.displayName , id: auth.currentUser.uid }
    })
    navigate("/")
  }

  useEffect(() => {
    if (! isAuth) {
      navigate("/login")
    }

  }, [])
  



  return (
    <div className='createPostPage'>

      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input
            type="text"
            name='title'
            placeholder='title'
            value={title}
            onChange={handleOnchange}
          />
        </div>

        <div className='inputGp'>
          <label>Post:</label>
          <input type="text"
            name='post'
            placeholder='post..'
            value={postText}
            onChange={handleOnchange}
          />
        </div>

        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  )
}

export default CreatePost