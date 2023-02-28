import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'

const RouteComp=()=>{
    return(
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Student" element={<Student/>}/>
        <Route path="/Contact" element={<Contact/>}/>
       </Routes>
       </BrowserRouter>
    )
}

export default RouteComp;