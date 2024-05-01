const { default: axiosClient } = require(`./axiosClient`);

const addPatient = (patient) => axiosClient.post('/patients', patient);


export default {
    addPatient
}