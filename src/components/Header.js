import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate() ; 

  const setDarkMode =() =>{
    document.querySelector('body').setAttribute('data-theme', 'dark') ; 
  }
  const setLightMode =() =>{
    document.querySelector('body').setAttribute('data-theme', 'light') ; 
  }

  const toggleTheme = e=> {
    if(e.target.checked) setDarkMode() ; 
    else setLightMode() ;
  }
  return (
    <div className='fixed top-0 flex justify-between items-center py-2 shadow-md  w-full  px-20 bg-bodybackground text-bodycolor'  >
      <h1 className='text-[2rem] cursor-pointer'onClick={()=>{navigate('/')}}>CODEHELP BLOGS</h1>
      <div>
      <input type= 'checkbox' id='data-theme' name='data-theme' onChange={toggleTheme} ></input>
      <label htmlFor='data-theme'>Dark</label>
      </div>
  
    </div>
  )
}

export default Header