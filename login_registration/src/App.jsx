import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Default from './Default'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Default />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
