import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {

  const {user,providerLogin, logOut} = useContext(AuthContext)




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
            <div className="navbar bg-lime-500 mb-5 px-3">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Programming <br></br> Tutorial</a>
    <img src="./Rose Gold Brush Glitter Feminine Boutique Circle Logo.png" />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
        <li><Link to={'/courses'}>Courses</Link></li>
        <li tabIndex={0}>
        <Link to={'/faq'}>FAQ</Link>
        </li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/register'} onClick={handleGoogleSignIn}>Register</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li>
          {
            user?.uid ?
            <>
              <span>{user?.displayName}</span>
              <button onClick={handleLogOut}>Log Out</button>
            </>
            :
            <>
              <Link to={'/login'}>Login</Link>
              <Link to={'/register'}>Register</Link>
            </>
          }
          </li>



          <input type="checkbox" className="toggle" checked />
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;