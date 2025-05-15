import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Default = () => {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('https://deploy-mern-api-beta.vercel.app')
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <Link to='/login'>
        <h1 className='text-center'>To Login</h1>
      </Link>
    </div>
  );
}

export default Default;
