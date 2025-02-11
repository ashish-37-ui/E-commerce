import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignUp = () => {
  return (
    <div className='LoginSignup'>
      <div className='loginSignup-container'>
        <h1>Sign Up</h1>
        <div className='LoginSignup-fields'>
          <input type='text' placeholder='Your Name' />
          <input type='email' placeholder='Your Email' />
          <input type='password' placeholder='Your Password' />


        </div>
        <button>Continue</button>
        <p className='LoginSignup-login'>Already have an account? <span>Login here</span></p>
        <div className='LoginSignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of rules & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignUp
