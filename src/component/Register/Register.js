import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser} =  useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email);

        createUser(email, password)
        .then (result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(e => console.error(e));
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>

                    <p className='font-bold	'>Name:</p>
                    <input type="text" name='name' required placeholder="Type your name" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />

                    <p className='font-bold'>Email:</p>
                    <input type="email" name='email' required placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />


                    <p className='font-bold'>Password:</p>
                    <input type="password" name='password' required placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs my-5 " /> <br />

                    <button className="btn btn-secondary" type='submit'>Register</button>



                </form>
        </div>
    );
};

export default Register;