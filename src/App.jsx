import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Sigout from './pages/Sigout';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
export default function App(){
  return <BrowserRouter>App
  <Routes>
    <Route path= "/" element={<Home/>} />
    <Route path= "/sigin-in" element={<SignIn/>} />
    <Route path= "/sign-out" element={<Sigout/>} />
    <Route path= "/about" element={<About/>} />
    <Route path= "/profile" element={<Profile/>} />

    
  </Routes>
  </BrowserRouter>

}
