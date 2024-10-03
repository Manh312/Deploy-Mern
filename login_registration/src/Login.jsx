import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://deploy-mern-api.vercel.app/login', { email, password})
    .then(result => {
      console.log(result);
      if (result.data === 'Success') {
        navigate('/home');
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              className='form-control rounded 0'
              autoComplete='off'
              name='email'
              placeholder='Enter email'
              onChange = {(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              className='form-control rounded 0'
              name='password'
              placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Login
          </button>
          </form>
          <p>You do not have an account</p>
          <Link to={'/register'} className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Sign Up
          </Link>
      </div>
    </div>
  );
}

export default Login;
