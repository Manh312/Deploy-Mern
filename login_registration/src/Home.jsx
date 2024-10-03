import { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('deploy-mern-api-jade.vercel.app//home')
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <h1 className='text-center'>Home Pages</h1>
    </div>
  );
}

export default Home;
