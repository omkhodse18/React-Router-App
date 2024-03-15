import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.svg"
import {toast} from "react-hot-toast"

function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly'>
        
        <Link to="/">
            <img src={Logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <Link to="#">About</Link>
                </li>

                <li>
                    <Link to="#">Contact</Link>
                </li>

            </ul>
        </nav>

        {/* Buttons */}

        <div className='flex ml-5 mr-3 gap-2'>
            {
                (!isLoggedIn) &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }

            
            {
                (!isLoggedIn) &&
                <Link to="/sign-up">
                    <button>
                        Sign Up
                    </button>
                </Link>
            }

            {
                (isLoggedIn) &&
                <Link to="/logout">
                    <button onClick={()=>{
                        setIsLoggedIn(false) 
                        toast.success("Logout successfully")
                    }}>
                        Log Out
                    </button>
                </Link>
            }

            {
                (isLoggedIn) &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }


        </div>

    </div>
  )
}

export default Navbar
