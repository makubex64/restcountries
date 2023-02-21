import { Outlet,Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import { useState, useEffect} from 'react';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';


export default function Root() {
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Dark');

const toggleTheme = ()=>{

  if(theme === "Dark"){
    setTheme("Light");

  }else{
    setTheme("Dark");
  }
}



useEffect(()=>{
  localStorage.setItem('theme', theme);
  document.body.className = theme;
},[theme])

const moonLight = <i className="bi bi-moon me-1"></i>;
const moonNight = <i className="bi bi-moon-fill me-1"></i>;

  return (
    <>
    
    {/* nabvar */}

      <div
      style={{backgroundColor: theme === "Light" ? "rgb(43 57 69)" : ""}}
      className={`nav-lalala shadow py-4  ${theme}`} >


        <div className="container">
          <div className="row d-flex align-items-center">

          <div className="col-auto me-auto">
            <Link className="navbar-brand" to="/">
            <span className="fs-4 fw-bold">Where in the world?</span> 
            </Link>
            </div>

        

          <div className="col-auto toggle-lalala" onClick={toggleTheme}>      
            
             {
              theme === "Dark" ? moonLight : moonNight
             }

             <span className="fw-semibold">
               {theme} Mode
             </span>
             
             
            
          </div>
        
        </div>        
      </div>
    </div>

    <div className="container">
    {/* render data */}
    <Outlet context={[theme, setTheme]} />
        
    </div>
      
    </>
  );
}