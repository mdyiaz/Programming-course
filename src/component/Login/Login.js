import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='	' action="">

                    

                    <p className='font-bold'>Email:</p>
                    <input type="email" placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs my-5" /> <br />


                    <p className='font-bold'>Password:</p>
                    <input type="password" placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs my-5 " />


            </form>
        </div>
    );
};

export default Login;