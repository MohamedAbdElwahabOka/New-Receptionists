const { default: axiosClient } = require(`./axiosClient`);

const addApp = (appointment) => axiosClient.post('/appointments', appointment);


export default {
    addApp
}