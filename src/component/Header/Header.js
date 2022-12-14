import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../Header/logo.png';
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";



const Header = () => {

  const {user,providerLogin, logOut} = useContext(AuthContext)

  const [toggle, setToggle] = useState(false);

  const [uname, setUname] = useState(false);




  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error =>console.error(error))
  }




const googleProvider = new GoogleAuthProvider()





  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error =>console.error(error))

  }

    return (
        <div>
            <div className="navbar bg-lime-500 mb-5 px-3 ">
                <div className="flex-1">
                  <Link to="/" className="btn btn-ghost normal-case text-xl">Programming <br></br> Tutorial</Link>
                  <img className='w-10' src={logo} />
                </div>
                <div className="flex-none">
                  <ul className="menu menu-horizontal p-0">
                      <li><Link to={'/courses'}>Courses</Link></li>
                      <li tabIndex={0}>
                      <Link to={'/faq'}>FAQ</Link>
                      </li>
                      <li><Link to={'/blog'}>Blog</Link></li>
                      {/* <li><Link to={'/register'} onClick={handleGoogleSignIn}>Register</Link></li> */}
                      {/* <li><Link to={'/login'}>Login</Link></li> */}
        <li>
          {
            user?
            <>
              
              <img onClick={() => setUname(e => !e)} alt='' className='w-14 h-14' src={user?.photoURL} ></img>

              <div className='absolute'>
                  <h1>{user.displayName}</h1>
              </div>

              <button onClick={handleLogOut}>Log Out</button>
            </>
            :
            <>
              <Link to={'/login'}>Login</Link>
              <Link to={'/register'}>Register</Link>
            </>
          }
          </li>

         <div onClick={() => setToggle(e => !e)}>

            {
              toggle? <BsFillSunFill></BsFillSunFill> : <BsFillMoonFill></BsFillMoonFill>
            }
            
         </div>
            </ul>
          </div>
        </div>
        </div>
    );
};

export default Header;