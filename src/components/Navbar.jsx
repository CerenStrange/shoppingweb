import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({user, handleLogOut}) {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">
          <img className='' src="./public/Opel-Logo_2017.png" width="60px" />
          <a className="navbar-brand" href="#">OPEListan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <NavLink className="nav-link" to="/">Anasayfa</NavLink>
          <NavLink className="nav-link" to="/models">Modeller</NavLink>
          {
            user?
            <>
             <button className="nav-link" onClick={handleLogOut}>Çıkış Yap ({user.name})</button>
             <NavLink className="nav-link" to="/favs"><img src="./public/Opel-Logo_2017.png" width="30px" />Favorilerim</NavLink>
            </>
            :
            <NavLink className="nav-link" to="/login">Giriş Yap</NavLink>
          }
          
          </ul>
          </div>
          </div>
      </nav>
    
  )
}

export default Navbar