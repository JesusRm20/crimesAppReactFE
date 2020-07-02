import config from '../../config.json';
import httpServices from './../httpServices';

const loadCrimes = async date => {
    const {data: resp } = await httpServices.post(config.pathLoad,date);
    return resp;
}
const crimeDetails = async id =>{
    const {data: resp } = await httpServices.get(config.pathCrimeDetails+id);
    return resp;
}
const getCrimes = async () => {
    const { data:crimes } = await httpServices.get(config.pathCrimes);
    return crimes;
}
const updateCrime = async obj =>{
    const { data:resp } = await httpServices.put(config.updateCrime, {obj});
    return resp;
}
const deleteCrime= async id =>{
    const { data:resp } = await httpServices.delete(config.deleteCrime+id);
    return resp;
}
export default {
    loadCrimes,
    crimeDetails,
    getCrimes,
    updateCrime,
    deleteCrime
}
