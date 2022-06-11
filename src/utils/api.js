import axios from "axios";

const petConnectApi = axios.create({
  baseURL: "https://pet-api-athena.herokuapp.com/api",
});

export const fetchAllPets = () => {
  return petConnectApi.get("/Pets").then(({ data }) => {
    // console.log(data);
    return data;
  });
};
