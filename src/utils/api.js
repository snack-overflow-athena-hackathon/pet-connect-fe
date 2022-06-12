import axios from "axios";

const petConnectApi = axios.create({
  baseURL: "https://pet-api-athena.herokuapp.com/api",
});

export const getAllPets = () => {
  return petConnectApi.get("/Pets").then(({ data }) => {
    return data;
  });
};

export const getSinglePet = (id) => {
  return petConnectApi.get(`/Pets/${id}`).then(({ data }) => {
    return data;
  });
};

export const getPetByUserId = (id) => {
  return petConnectApi.get(`/Users/${id}/Pets`).then(({ data }) => {
    return data;
  });
};

export const getAllAppointments = () => {
  return petConnectApi.get("/Appointments").then(({ data }) => {
    return data;
  });
};

export const getSingleAppointment = (id) => {
  return petConnectApi.get(`/Appointments/${id}`).then(({ data }) => {
    return data;
  });
};

export const getAppointmentsByUserId = (id) => {
  return petConnectApi.get(`/Users/${id}/Appointments`).then(({ data }) => {
    return data;
  });
};

export const getUserById = (id) => {
  return petConnectApi.get(`/Users/${id}`).then(({ data }) => {
    return data;
  });
};

export const getAllUsers = () => {
  return petConnectApi.get("/Users").then(({ data }) => {
    return data;
  });
};

//  export const createNewUser(body) {
//    return petConnectApi.post(`/users`, body).then((res) => {
//      return res
//    })
//  }
