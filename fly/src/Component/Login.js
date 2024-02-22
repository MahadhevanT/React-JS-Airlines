import React from 'react'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <Link to="signup">
      <button className='btn'>Sign up</button>
    </Link>
  );
}

export default Login();
