import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('Logging in with email:', email, 'and password:', password);
    history('/home')
  };

  return (
    <div className='body'>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="content">
            <div className="input-field">
              <input type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='Email'
                required
              />
            </div>
            <div className="input-field">
              <input type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='password'
                required
              />
            </div>

          </div>
          <div className="havent-reg" onClick={()=>{history("/registration")}}>Haven't Register?</div>
          <div className="action">
            {/* <button>Register</button> */}
            <button>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
