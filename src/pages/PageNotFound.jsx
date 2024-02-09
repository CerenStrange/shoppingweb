import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
        <h1>404</h1>
        <h2>Sayfa Bulunamadı</h2>
        <Link to="/" className='btn btn-info'>Anasayfaya Dön</Link>
    </div>
  )
}

export default PageNotFound