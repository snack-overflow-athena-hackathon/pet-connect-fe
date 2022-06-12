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
  return petConnectApi.get(`/Pets/ByPetId/${id}`).then(({ data }) => {
    return data;
  });
};

export const getPetByUserId = (id) => {
  return petConnectApi.get(`/Users/${id}/Pets`).then(({ data }) => {
    return data;
  })
};

 export const getUserById = (id) => {
   return petConnectApi.get(`/Users/${id}`).then(({ data }) => {
     return data;
   })
 }