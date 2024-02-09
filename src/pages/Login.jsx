import React from 'react'

function Login({handleLogin}) {
  return (
    <>
      <h1>Login</h1>
      <button
      onClick={handleLogin}
      className='btn btn-warning'>Giriş Yap</button>
    </>
  )
}

export default Login