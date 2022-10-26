import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

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
        })

        .catch(error => console.error(error))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                    

                    <p className='font-bold' name="email" >Email:</p>
                    <input type="email" placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />


                    <p className='font-bold' name = "password" >Password:</p>
                    <input type="password" placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs my-5 " /> <br />

                    <button className="btn btn-secondary" type='submit'>Log In</button>



            </form>
        </div>
    );
};

export default Login;