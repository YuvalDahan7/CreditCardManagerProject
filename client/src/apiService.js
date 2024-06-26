import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/",
});

export const getBanks = () => api.get("Bank/GetBanks");

export const getCards = (filter) =>
  api
    .get("/api/Card/GetCards", { params: filter })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });

export const increaseCreditLimit = (data) =>
  api.post("Card/IncreaseCreditLimit", data);
