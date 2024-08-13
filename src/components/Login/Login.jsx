import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {signInUser, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate('/');

        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handleGoogle = ()=>{
      googleSignIn()
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.log(error.message);
      })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-[560px]">
        <h2 className="text-2xl text-center mt-4 font-bold">Please Login</h2>
        <form onSubmit={handleSubmit} className="card-body w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name='email'
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name='password'
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className='text-center mt-3 mb-3'>
          <button onClick={handleGoogle} className='btn btn-success text-center text-white'>Google SignIn</button>
        </div>
      </div>
    </div>
    );
};

export default Login;