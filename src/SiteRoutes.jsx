import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/Models'
import PageNotFound from './pages/PageNotFound'
import Favs from './pages/Favs'
import PrivateRoute from './PrivateRoute'


function SiteRoutes({handleLogin, user}) {
  return (
    <>
       <Routes>
            <Route path='/' element={<Home user={user} />}/>
            <Route path='/login' element={<Login handleLogin={handleLogin} />}/>
            <Route path='/models' element={<About user={user}/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/favs' element={<PrivateRoute user={user}><Favs/></PrivateRoute>}/>
            
          </Routes>
    
    </>
  )
}

export default SiteRoutes