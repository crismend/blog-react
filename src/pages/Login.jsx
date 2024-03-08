import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase-config'
import { useNavigate } from 'react-router-dom'


const Login = ({setisAuth}) => {
  
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setisAuth(true)
      navigate('/')
    })
  }

  return (
    <div className='loginPage'>
      <p>Sign In with Google to continue</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign with Google</button>
    </div>
  )
}

export default Login