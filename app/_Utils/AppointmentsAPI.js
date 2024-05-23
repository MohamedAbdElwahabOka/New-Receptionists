const { default: axiosClient } = require(`./axiosClient`);

const addApp = (appointment) => axiosClient.post('/appointments', appointment);

const getAppointments = () => axiosClient.get('/appointments?populate=*');


export default {
    addApp,
    getAppointments
}