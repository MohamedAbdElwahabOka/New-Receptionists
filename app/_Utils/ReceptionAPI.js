const { default: axiosClient } = require(`./axiosClient`);

const  getReceptionists = () => axiosClient.get('/receptionists?populate=*');


export default {
    getReceptionists
}