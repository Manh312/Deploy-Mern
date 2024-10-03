import { useEffect } from 'react';
import axios from 'axios';

const Default = () => {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('https://deploy-mern-api-beta.vercel.app')
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1 className='text-center'>ABC</h1>
    </div>
  );
}

export default Default;
