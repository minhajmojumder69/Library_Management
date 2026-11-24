import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { baseUrl } from "../services/BaseUrl";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const {authUser,setAuthUser} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async ()=>{
    try {
      const formData = new URLSearchParams()
      formData.append('username',username)
      formData.append('password',password)

      const res = await fetch(`${baseUrl}/login`,{
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body:formData
      })
      const data = await res.json()
      console.log(data)
      const accessToken = data?.access_token

      localStorage.setItem('lm_token',accessToken)
      
      const userResponse = await fetch(`${baseUrl}/user`,{
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      })

      const userData = await userResponse.json()
      setAuthUser(userData)
      if(userData.detail == "User not Found"){
        return
      }
      else{
        navigate('/')
      }

    } catch (error) {
      console.log(error)
    }
  }

  console.log(authUser)

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-96">
            Please enter your credential
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Username</label>
              <input value={username} onChange={(e)=> setUsername(e.target.value)} type="email" className="input" placeholder="Username" />
              <label className="label">Password</label>
              <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="input" placeholder="Password" />
              <div>
                <Link className="link link-hover" to={'/signup'}>Don't have and account?</Link>
              </div>
              <button onClick={handleLogin} className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
