import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../AuthenticationProviders/AuthenticationProviders';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(UserContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                            <label className="label">
                                <p>Forgot Password?<button className="btn btn-active btn-link"><Link to="/register">Reset</Link></button></p>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <label className="label">
                            <p>New To EduCare? Please<button className="btn btn-active btn-link"><Link to="/register">Register</Link></button></p>

                        </label>
                        <div className="form-control">
                            <p><button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;