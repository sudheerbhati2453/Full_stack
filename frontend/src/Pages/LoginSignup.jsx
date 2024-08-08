import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [state,setState]=useState("Login");
  const [formData,setFormData]=useState({
      username:"",
      password:"",
      email:"",

  })
  // const changeHandler=(e)=>{
  //   setFormData({...formData,[e.target.name]:e.target.value})
  // }

  const [passwordStrength, setPasswordStrength] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  }

  const checkPasswordStrength = (password) => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
  }

  const calculatePasswordStrength = (password) => {
    const strengthPercentage = (password.length / 12) * 100;
    if (strengthPercentage < 33) {
      return 'Weak';
    } else if (strengthPercentage < 66) {
      return 'Medium';
    } else {
      return 'Strong';
    }
  }

  const login=async()=>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json'
    },
    body: JSON.stringify(formData),

  }).then((response)=>response.json()).then((data)=>responseData=data)
  if(responseData.sucess){
    localStorage.setItem('auth-token',responseData.token)
    window.location.replace("/");
  }
  else{
    alert(responseData.error)
  }

  }
  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      setState("Login"); // Update the state to Login after successful signup
      alert("Signup successful! Please login with your new credentials."); // Alert the user about successful signup
    } else {
      alert("Signup successful! Please login with your new credentials.");
    }
  };
  return (
    <login>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign-Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Username' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
          {/* <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' /> */}
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          {passwordStrength && (
  <div className="password-strength">
    {formData.password && (
      <>
        <div className={`bar ${passwordStrength.toLowerCase()}`} style={{ width: `${calculatePasswordStrength(formData.password)}%` }}></div>
        <span>{passwordStrength}</span>
      </>
    )}
  </div>
)}

          
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Submit</button>
        {state==="Sign-Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>:
                <p className="loginsignup-login">Create an account- <span onClick={()=>{setState("Sign-Up")}}>Click here</span></p>}


        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>I agree to the terms & policy.</p>
        </div>
      </div>
      
    </div>
    </login>
  )
}

export default LoginSignup
