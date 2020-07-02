import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
        return ( 
            <React.Fragment>
                <div className="login-form m-5">
                    <div className="cotainer">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <form>
                                    <div className="card">
                                        <div className="card-header">Log in</div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label htmlFor="userName" className="col-md-4 col-form-label text-md-right">User Name</label>
                                                <div className="col-md-6">
                                                    <input type="text" id="userName" className="form-control" name="userName" required autoFocus />
                                                </div>
                                            </div>
                                                
                                            <div className="form-group row">
                                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                                <div className="col-md-6">
                                                    <input type="password" id="password" className="form-control" name="password" required />
                                                </div>
                                            </div>
                                                
                                            <div className="form-group row">
                                                <div className="col-md-6 offset-md-4">
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" name="remember" /> Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                                
                                            <div className="col-md-6 offset-md-4">
                                                <button type="button" onClick={() => props.onSubmit()} className="btn btn-primary">
                                                    Log in
                                                </button>
                                                <a href="#" className="btn btn-link">
                                                    Forgot Your Password?
                                                </a>
                                                <Link to="/signup" className="btn btn-link">
                                                    Sign Up
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>           
                </div> 
            </React.Fragment>
         );
}
export default Login;