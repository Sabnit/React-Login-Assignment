import React from 'react'

const Login = () => {
  return (
    <div className='form'>
        <p className="title">Login</p>
        <form>
            <div className='input-container'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' id='username'/>
            </div>
            <div className='input-container'>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password'/>   
              </div>
            <div className='button'>
              <input type='submit'/>
            </div>
        </form>
    </div>
  )
}

export default Login