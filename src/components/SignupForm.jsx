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
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button>
          Student
        </button>

        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        
        {/* first and last name  */}
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup>*</sup></p>
            
            <input
              required
              type='text'
              name='firstName'
              placeholder='John'
              value={formData.firstName}
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup>*</sup></p>

            <input
              required
              type='text'
              name='lastName'
              placeholder='Doe'
              value={formData.lastName}
              onChange={changeHandler}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>
        
        {/* Email Address field  */}
        <div className='mt-[20px]'>
          <label className='w-full mt-[20px]'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup>*</sup></p>

              <input
                required
                type='email'
                name='email'
                placeholder='johndoe@gmail.com'
                value={formData.email}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              />
          </label>
        </div>

        {/* create and confirm password */}
        <div className='w-full flex gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup>*</sup></p>

              <input
                required
                type={(showPassword) ? "text" : "password"}
                name='password'
                placeholder='Enter password'
                value={formData.password}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              />

              <span 
              className='absolute right-3 top-[38px] cursor-pointer' 
              onClick={() => setShowPassword((prev) => !prev)}>
              {
                (showPassword) ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> ) 
                                : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
              }
             </span>

          </label>

          <label className='w-full relative'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup>*</sup></p>

              <input
                required
                type={(showPassword) ? "text" : "password"}
                name='confirmPassword'
                placeholder='Confirm password'
                value={formData.confirmPassword}
                onChange={changeHandler}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
              />

              <span 
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={()=>setShowPassword((prev) => !prev)}>
              {
                (showPassword) ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) 
                                : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
              }
             </span>

          </label>
        </div>

        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Create Account
        </button>
      </form>


    </div>
  )
}

export default SignupForm
