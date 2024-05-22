const { default: axiosClient } = require(`./axiosClient`);


const getDoctorFilteredByTYPE_OF_SPEC = (TYPE_OF_SPEC) => axiosClient.get(`/doctors?filters[Type_of_Spec][$eq]=${TYPE_OF_SPEC}&populate=*`)


export default {
    getDoctorFilteredByTYPE_OF_SPEC
}