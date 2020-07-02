import config from '../../config.json';
import httpServices from './../httpServices';

const login = async (usr) => {
    const {data:aut} = await httpServices.post(config.pathLogin,usr);
    if (aut.val === 'true') {
        localStorage.setItem('token',aut.token);
        return true;
    }
    return false;
    
}

const signout = () => {
    localStorage.removeItem('token');
    return false;
}

const getSession = () => {
    const token = localStorage.getItem('token');
    if (token){
        return token
    } 
    return false
}

const signUp = async usr => {
    const {data:aut} = await httpServices.post(config.pathSignUp,usr);
    return aut
}

export default {
    login,
    signout,
    getSession,
    signUp
}