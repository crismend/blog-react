import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import "./App.css"
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'



const App = () => {

  const [isAuth, setisAuth] = useState(localStorage.getItem("isAuth"))



  const outLogin = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setisAuth(false)
      window.location.pathname ="/login"
    })
  }

  



  return (
    <BrowserRouter>
      <nav>
        {!isAuth ? (<Link to="/login">Login</Link>) : 
        (<>
         <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        <button onClick={outLogin}>Log Out</button>
        </>)
        }
        
      </nav>

      <Routes>
        <Route path='/' element={<Home  isAuth={isAuth} />}/>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />}/>
        <Route path='/login' element={<Login setisAuth={setisAuth}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App