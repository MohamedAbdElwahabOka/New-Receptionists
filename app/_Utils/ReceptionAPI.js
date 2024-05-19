const { default: axiosClient } = require(`./axiosClient`);

const getReceptionists = () => axiosClient.get('/receptionists?populate=*');
const getReceptionistByRegistrationNumber = (RegistrationNumber) => axiosClient.get(`/receptionists?filters[reg_Num][$eq]=${RegistrationNumber}&populate=*`)


export default {
    getReceptionists,
    getReceptionistByRegistrationNumber
}