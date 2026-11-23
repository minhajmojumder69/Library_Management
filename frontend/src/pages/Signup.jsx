import { useState } from "react";
import { Link } from "react-router";
import { baseUrl } from "../services/BaseUrl";

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [hashPassword, setHashPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSignUp = async (e)=>{
    e.preventDefault()

    const userData ={
        firstname,
        lastname,
        username,
        email,
        hash_password: hashPassword,
        role
    };
    const res = await fetch(`${baseUrl}/createuser`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    })

    const data = await res.json()
    console.log(data)
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6 w-96">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">First Name</label>
              <input
                type="text"
                name="firstname"
                className="input"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <label className="label">Last Name</label>
              <input
                type="text"
                name="lastname"
                className="input"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />

              <label className="label">Username</label>
              <input
                type="text"
                name="username"
                className="input"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="hash_password"
                className="input"
                placeholder="Password"
                value={hashPassword}
                onChange={(e) => setHashPassword(e.target.value)}
              />

              <label className="label">Role</label>
              <select
                name="role"
                className="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">Member</option>
                <option value="admin">Librarian</option>
              </select>

              <div>
                <Link className="link link-hover" to={"/login"}>
                  Already have an account?
                </Link>
              </div>
              <button className="btn btn-neutral mt-4" onClick={handleSignUp}>Sign Up</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;