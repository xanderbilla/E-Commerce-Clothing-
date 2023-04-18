import { useState } from 'react';
import '../styles/signup.css';

const SignUp = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleForm = () => {
    setFormSubmitted(!formSubmitted)
  }

  return (
    <div className="signup">
      <div className="wrapper">
        <form action="" className="signup_form">
          <div className="form_input">
            <label className='label' htmlFor="name">Full Name</label>
            <input className='input' required type="text" id='name' disabled={formSubmitted} />
          </div>
          <div className="form_input">
            <label className='label' htmlFor="username">Username</label>
            <input className='input' required type="text" id='username' disabled={formSubmitted} />
          </div>
          <div className="form_input">
            <label className='label' htmlFor="email">Email</label>
            <input className='input' required type="email" id='email' disabled={formSubmitted} />
          </div>
          <div className="form_input">
            <label className='label' htmlFor="password">Password</label>
            <input className='input' required type="password" id='password' disabled={formSubmitted} />
          </div>
          <input className='button' type="submit" disabled={formSubmitted} onClick={handleForm} value="Sign Up" />
        </form>
        {
          formSubmitted && (
            <form action="" className="verify_form">
              <div className="form_input">
                <label className='label' htmlFor="code">Verification Code</label>
                <input className='input' required type="number" id='code' />
              </div>
              <input className='button' type="submit" value="Verify" />
            </form>
          )
        }
      </div>
    </div>
  )
}

export default SignUp
