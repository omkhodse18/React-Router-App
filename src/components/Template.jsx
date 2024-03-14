import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


function Template({title, desc1, desc2, image, formtype, setIsLoggedIn}) {
  return (
    <div>
        
        <div>

            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                (formtype === "signup") ? <SignupForm /> : <LoginForm />
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                Sign Up with Google
            </button>

        </div>

        <div>

            <img src='../assets/frame.png' alt='frame' width={558} height={504} loading='lazy' />

            <img src={image} alt="student"  width={558} height={409} loading='lazy' />

        </div>

    </div>
  )
}

export default Template
