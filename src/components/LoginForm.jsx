import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom';
import {toast} from "react-hot-toast"
import {useNavigate} from "react-router-dom"

function LoginForm({setIsLoggedIn}) {

  const [formData, setFormData] = useState({email:"",password:""});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  function changeHandler(event){
    // const {name, value} = event.target;

      setFormData( (prev) => (
        {...prev, 
          [event.target.name]:event.target.value
        }
        ) )
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <div>
      
      <form onSubmit={submitHandler}>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>

          <input
            required
            type='email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
            placeholder='abc@gmail.com'
          />
        </label>

        
        <label>
          <p>
            Password<sup>*</sup>
          </p>

          <input
            required
            type={(showPassword) ? ("text") : ("password")}
            name='password'
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
          />

          <span onClick={()=>setShowPassword((prev) => !prev)}>
            {
              (showPassword) ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
            }
          </span>

          
          <Link to="#">
            <p>
               Forgot Password
            </p>
          </Link>

        </label>

        <button>
          Sign In
        </button>

      </form>

    </div>
  )
}

export default LoginForm
