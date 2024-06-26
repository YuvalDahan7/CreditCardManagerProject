import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/",
});

export const getBanks = () =>
  api
    .get("/api/Bank/GetBanks")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });

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

export const increaseCreditLimit = async (data) => {
  let res = await api
    .post("api/Card/IncreaseCreditLimit", {
      CardNumber: data.cardNumber,
      RequestedLimit: data.requestedLimit,
      Occupation: data.occupation,
      AverageMonthlyIncome: data.averageMonthlyIncome,
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(res.data);
  return res.data;
};

export const login = async (username, password) => {
  try {
    const response = await api.post("/UserAuth/login", {
      Username: username,
      Password: password,
    });
    console.log("Logged in!");
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
