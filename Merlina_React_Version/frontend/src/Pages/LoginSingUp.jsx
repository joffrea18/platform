import React from 'react';
import Button from 'react-button-component';
import { Link } from 'react-router-dom';

const LoginSingUp = () => {
    return (
        <>
        <form >
          <fieldset id='login'>
        <h2>Your Account</h2>
            <label>
              <input
              name="email"
              type="email"
              required
              placeholder='Email*'
              />
            </label>
            <label>
              <input
              name="password"
              type="password"
              required
              placeholder='Password*'
              />
            </label>
            {/* <li>Token: {token}</li> */}
            <div className="login">
            <Button >Login</Button>
            </div>
            <p>
              ¿You don't have account?
              <br/>
              <Link to="/contact">Regist</Link>
              <br/>
              <br/>
              <Link to="/">Home</Link>
            </p>
          </fieldset>
        </form>
        </>
    );
}

export default LoginSingUp;

