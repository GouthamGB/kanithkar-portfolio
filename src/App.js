import './App.css';
import {SideBarLeft, SideBarRight} from "./components"
import {useState, useEffect} from "react"
import {SingleWork, Home} from "./container"
import {useParams, Routes, Route, Outlet} from 'react-router-dom'



function App({location}) {
  const params = useParams()
  


 

  return (
    <div className="App">

     
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/works/:slug' element={<SingleWork/>}/>
      </Routes>
          
      </div>

   
  );
}

export default App;
