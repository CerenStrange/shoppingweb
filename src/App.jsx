import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'
import './App.css'
import { useNavigate } from 'react-router-dom'



function App() {
  const [user, setUser]= useState(null)
  const navigate=useNavigate

  useEffect(()=>{
     setUser(JSON.parse(localStorage.getItem('user'))??null) 

  },[])

  const handleLogin=()=>{
    const user={id:1, name:"Ceren"}
    setUser(user)
    localStorage.setItem('user',JSON.stringify(user))
    navigate('/')
  } 
  
  const handleLogOut=()=>{
    localStorage.removeItem('user')
    setUser(null)
    
  }


  return (
    <>
      <Navbar handleLogOut={handleLogOut} user={user} />
      <div className='container'>
        <div className='col-sm-12'>
          <SiteRoutes handleLogin={handleLogin} user={user}/>

        </div>
      </div>
      <br />
        <br />
        <br />
        <hr />
      <p className='container'>
        Bu sayfanın Opel ve Stellantis ile hiçbir bağlantısı yoktur.
         <br />
         <br />
        <img src="./public/cerenlogo.png" width="60px"/>
        &copy;Ceren Çelik tarafından Üretken Akademi için hazırlanmıştır.
        </p>
    </>
  )
}

export default App
