import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

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

                    

                    <p className='font-bold' name="email" >Email:</p>
                    <input type="email" placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />


                    <p className='font-bold' name = "password" >Password:</p>
                    <input type="password" placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs my-5 " /> <br />

                    <button className="btn btn-secondary" type='submit'>Log In</button>

                    <p className='text-red-500'>{error}</p>



            </form>
        </div>
    );
};

export default Login;