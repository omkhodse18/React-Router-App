import React from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { useState } from "react";
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"

function SignupForm({setIsLoggedIn}) {
  
  const [formData, setFormData] = useState( {firstName:"", lastName:"", email:"", password:"",        confirmPassword:""});

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  function changeHandler(event){
    // const {name, value} = event.target;
    
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name] : event.target.value
      }
    ))
  }


  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Password does not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account created successfully");
    // console.log(formData);
    navigate("/dashboard");
    
  }

  return (
    <div>
        
      {/* student Instructor Tab  */}
      <div>
        <button>
          Student
        </button>

        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        
        {/* first and last name  */}
        <div>
          <label>
            <p>First Name<sup>*</sup></p>
            
            <input
              required
              type='text'
              name='firstName'
              placeholder='John'
              value={formData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>

            <input
              required
              type='text'
              name='lastName'
              placeholder='Doe'
              value={formData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>
        
        {/* Email Address field  */}
        <label>
            <p>Email Address<sup>*</sup></p>

            <input
              required
              type='email'
              name='email'
              placeholder='johndoe@gmail.com'
              value={formData.email}
              onChange={changeHandler}
            />
        </label>

        {/* create and confirm password */}
        <div>
          <label>
              <p>Create Password<sup>*</sup></p>

              <input
                required
                type={(showPassword) ? "text" : "password"}
                name='password'
                placeholder='Enter password'
                value={formData.password}
                onChange={changeHandler}
              />

              <span onClick={() => setShowPassword((prev) => !prev)}>
              {
                (showPassword) ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
              }
             </span>

          </label>

          <label>
              <p>Confirm Password<sup>*</sup></p>

              <input
                required
                type={(showPassword) ? "text" : "password"}
                name='confirmPassword'
                placeholder='Confirm password'
                value={formData.confirmPassword}
                onChange={changeHandler}
              />

              <span onClick={()=>setShowPassword((prev) => !prev)}>
              {
                (showPassword) ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
              }
             </span>

          </label>
        </div>

        <button>
          Create Account
        </button>
      </form>


    </div>
  )
}

export default SignupForm
