import React, { Component } from 'react';

class Signup extends Component {
    render() { 
        const { onSubmit } = this.props;
        return ( 
            <div className="container-fluid col-md-5">
                <div className="container">
                    <h2 className="text-center" id="title">Sign Up to Gain Free Access</h2>
                        <p className="text-center">
                        <small id="passwordHelpInline" className="text-muted"> Developer: follow me on facebook <a href="https://www.facebook.com/chuy.sicairos1/"> Jesus Sicairos</a> inspired from <a href="https://p.w3layouts.com/">https://p.w3layouts.com/</a>.</small>
                    </p>
                    <div className="row" className="custom-centered">
                        <div className="col align-self-center">
                            <center>
                                <fieldset>								
                                    <form onSubmit={onSubmit}>
                                        <p className="text-uppercase pull-center"> SIGN UP.</p>
                                        <div className="form-group">
                                        <input type="text" name="firstName" id="firstName" riquire="true" className="form-control input-lg text-center" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                        <input type="text" name="lastName" id="lastName" className="form-control input-lg text-center" placeholder="Last Name" />
                                        </div>
                                        <div className="form-group">
                                        <input type="text" name="username" id="username" className="form-control input-lg text-center" placeholder="username" />
                                        </div>
                                        
                                        <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-lg text-center" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                        <input type="password" name="password" id="password" className="form-control input-lg text-center" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                        <input type="password" name="passwordConfirm" id="passwordConfirm" className="form-control input-lg text-center" placeholder="Comfirm Password" />
                                        </div>
                                        <div className="form-check">
                                        <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" id="chckbx"/>
                                            By Clicking register you're agree to our policy & terms
                                        </label>
                                        </div>
                                        <div>
                                        <button className="btn btn-md btn-primary" >
                                        Register
                                        </button>
                                        </div>
                                    </form>
                                </fieldset>
                            </center>
                        </div>				
                    </div>
                </div>
                <p className="text-center">
                    <small id="passwordHelpInline" className="text-muted"> Developer: Eldorado state Institute of Technology BS. Computer Systems Engineer @2019 Credits: <a href="https://v4-alpha.getbootstrap.com/">boostrap v4.</a></small>
                </p>
            </div>
         );
    }
}
 
export default Signup;