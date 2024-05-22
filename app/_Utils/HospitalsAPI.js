const { default: axiosClient } = require(`./axiosClient`);

const getHospital = () => axiosClient.get('/hospitals?populate=*');


export default {
    getHospital
}