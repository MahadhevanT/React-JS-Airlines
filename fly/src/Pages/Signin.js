import React,{useState} from 'react'

export default function Signin() {
  const {values,setValues}=useState({
    fullname:"",
    email:"",
    password:"",
  });
  const handleFormSubmit=(event)=>{
    event.preventDefault();
  };
  return (
    <div className='container1'>
      <div className='app-wrapper'>
        <div>
          <h2 className='title'>Create Account</h2>
        </div>
        <form className='form-wrapper'>
          <div className='name'>
            <label className='label'>Full Name</label>
            <input className='input' type='text' name='fullname'value={values.fullname} ></input>
          </div>
          <div className='email'>
            <label className='label'>Email</label>
            <input className='input' type='email' name='email' value={values.email} />
          </div>
          <div className='password'>
            <label className='label'>password</label>
            <input className='input' type='password' name='password'value={values.password} />
          </div>
          <div>
            <button className='submit'onClick={handleFormSubmit}>sign Up</button>
          </div>
        </form>
      </div>
      
      
    </div>
  )
}
