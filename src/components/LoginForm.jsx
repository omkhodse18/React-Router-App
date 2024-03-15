import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom';

function LoginForm() {

  const [formData, setFormData] = useState({email:"",password:""});
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event){
    const {name, value} = event.target;

      setFormData( (prev) => (
        {...prev, 
          [name]:value
        }
        ) )
  }

  return (
    <div>
      
      <form>

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

          <span onClick={setShowPassword((prev) => !prev)}>
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
