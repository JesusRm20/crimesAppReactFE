import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './navbar';
import Crime from './crime/crimesComponent';
import Login from './account/login';
import Signup from './account/signup';
import userService from './account/userService';
import crimeServices from './crime/crimeServices';
import LoadCrimes from './crime/loadCrimes';
import CrimeDetails from './crime/crimeDetailsComponent';

class App extends Component {
    state = {
        session: false,
        token: false
    }

    async componentDidMount() {

        const token = userService.getSession();
        if(token){
            const session = true;
            this.setState({ session })
            this.setState({ token });
        }
    }

    handleSubmitLogin = async () => {
        const usr = {
            userName: document.getElementById('userName').value,
            password: document.getElementById('password').value
          }
        const resp = await userService.login(usr);
        if(resp){
            const session = true;
            this.setState({session}); 
        }
    }
    handleLogOut = () => {
        
        if (!userService.signout()) {
            console.log(false)
            const session = false;
            this.setState({ session });
        }
        
    }
    handlesubmitLoad = e => {
        e.preventDefault();
        const date = { 'date': document.getElementById('date').value};
        crimeServices.loadCrimes(date);
    }
    handlesubmitSignup = async e => {
        e.preventDefault();
        const usr = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value

        };

        const signUp = userService.signUp(usr);
        return signUp;
    }

    render() { 
        return ( 
            <React.Fragment>
                <NavBar session= { this.state.session } logOut={this.handleLogOut} />
                <Switch>
                    <Route path="/login">
                        { this.state.session ? <Redirect to='/' /> : <Redirect to='/login' /> }
                        <Login onSubmit={this.handleSubmitLogin} />
                    </Route>
                    <Route path="/signup">
                        { this.state.session ? <Redirect to='/' /> : <Redirect to='/signup' /> }
                        <Signup onSubmit={this.handlesubmitSignup} />
                    </Route>
                    <Route path="/loadCrimes">
                        <LoadCrimes onSubmit={ this.handlesubmitLoad }/>
                    </Route>
                    <Route path='/crimeDetails/:id' component={CrimeDetails } />
                    <Route path="/">
                        { this.state.session ? <Redirect to='/' /> : <Redirect to='/login' /> }
                        <Crime />
                    </Route>
                </Switch>
            </React.Fragment>
         );
    }
}
 
export default App;