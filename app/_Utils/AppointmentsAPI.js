const { default: axiosClient } = require(`./axiosClient`);

const addApp = (appointment) => axiosClient.post('/appointments', appointment);

const deleteAppointment = (id) => axiosClient.delete(`/appointments/${id}`);
const getAppointments = () => axiosClient.get('/appointments?populate=*');


export default {
    addApp,
    getAppointments,
    deleteAppointment
}