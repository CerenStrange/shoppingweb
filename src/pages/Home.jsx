import React from 'react'
import { Link } from 'react-router-dom'

function Home({user}) {
  return (
    <>
      <div className='col'>
        <h1>OPEListan'a Hoş Geldiniz!</h1>
          <h4>
           Burada Opel'in son 7 yılda en çok bilinen modellerini inceleyebilirsiniz.
          </h4>
          <Link className='btn btn-warning btn-lg' to="/models"><img src="./public/Opel-Logo_2017.png" width="30px" />Modelleri İncele</Link>
      </div>
        
    </>
  )
}

export default Home