import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {


    const [error, setError] = useState('');

    const {signIn, providerLogin, providerGithub} = useContext(AuthContext);



    const githubProvider = new GithubAuthProvider();


const handleGithubSignIn = () => {
    providerGithub(githubProvider)
    .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>console.error(error))
}

    // const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () =>{
        providerLogin()
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(error =>console.error(error))
    
      }


    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
console.log(email,password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate('/')
        })

        .catch(error => {
            
            console.error(error)
            setError(error.message);
        })
    }
    return (
        <div className='mx-96'>
            <form onSubmit={handleSubmit}>

                    

                    <p className='font-bold'  >Email:</p>
                    
                    <input name="email" type="email" placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />


                    <p className='font-bold'  >Password:</p>
                    <input name = "password" type="password" placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs my-5 " /> <br />

                    <button className="btn btn-secondary" type='submit'>Log In</button>

                    <p className='text-red-500'>{error}</p>

            </form>

            <p>Don't have an account? <small className='text-rose-600'><Link to="/register">Sign in here</Link></small></p>
            



            <button className="my-10 btn btn-success" onClick={handleGoogleSignIn}>Sign In With Google</button> <br />


            <button onClick={handleGithubSignIn} className=" btn btn-success" >Sign In With GitHub</button>
        </div>
    );
};

export default Login;