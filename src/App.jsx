import {Route, Routes} from 'react-router-dom'
import Blog from './pages/Blog'
import Career from './pages/Career'
import Clone from './pages/Clone_project'
import Company from './pages/Company'
import Contact from './pages/Contact_us'
import Home from './pages/Home'
import Service from './pages/Service'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/> 
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/clone' element={<Clone/>}/>
    <Route path='/company' element={<Company/>}/>
    <Route path='/contact-us' element={<Contact/>}/>
    <Route path='/service' element={<Service/>}/>
   
   </Routes>
  )
}

export default App