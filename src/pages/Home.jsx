import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config'
// import { useNavigate } from 'react-router-dom'

const Home = ({isAuth}) => {

  const [postList, setPostList] = useState([])
  // const navigate = useNavigate()

  useEffect(() => {
    const postCollectionRef = collection(db, "posts")
    const  getPost = async () => {
      const data = await getDocs(postCollectionRef)
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getPost()
  }, [])

  // useEffect(() => {
  //   if (! isAuth) {
  //     navigate("/login")
  //   }
  // }, [])

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);

    // Actualiza el estado local eliminando el post
    setPostList((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };


  

  return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
        <div key={post.id} className='post'>
          <div className='postHeader'>
            <div className='title'> <h1>{post.title}</h1></div>
            <div className='deletePost'>
            {isAuth && post.author.id === auth.currentUser.uid &&( <button onClick={() => deletePost(post.id)}>&#128465;</button>)}
          </div>
          </div>
          <div className='postTextContainer'> {post.postText}</div>
          <h3>@{post.author.name}</h3>
        </div>
        )
      })}
    </div>
  )
}

export default Home