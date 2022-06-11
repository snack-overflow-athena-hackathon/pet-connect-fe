import axios from "axios";

const petConnectApi = axios.create({
  baseURL: "https://pet-api-athena.herokuapp.com/api",
});

export const getAllPets = () => {
  return petConnectApi.get("/Pets").then(({ data }) => {
    // console.log(data);
    return data;
  });
};

export const getSinglePet = (id) => {
  return petConnectApi.get(`/Pets/ByPetId/${id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};
