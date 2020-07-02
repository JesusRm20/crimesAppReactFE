import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = (props) => {
    const location = useLocation();
    return ( 
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to= { props.session ? '/':'/login' }>Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        { props.session ? <React.Fragment>
                            <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/loadCrimes">Load Crimes</Link>
                            </li>
                        </React.Fragment> : null }
                        
                    </ul>
                    <span className="navbar-text">
                        {
                            location.pathname === '/login' ?
                            <Link to= "/signup" >
                                <i className="fa fa-user-plus" aria-hidden="true"> Sign Up </i>
                            </Link> :
                            <Link to={ props.logged ? "/" : "/login" } >
                                <i 
                                    className={props.session ? "fa fa-sign-out" : "fa fa-sign-in" } 
                                    onClick={ props.session ? props.logOut : null } 
                                    aria-hidden="true"
                                > 
                                    { props.session ? "Log out" : "Log in" } 
                                </i>
                            </Link> 
                        
                        }
                    </span>
                </div>
            </nav>
        </React.Fragment>
     );
}
 
export default NavBar;


