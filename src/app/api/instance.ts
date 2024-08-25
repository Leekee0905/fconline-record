"use server";
import axios from "axios";

const apiInstacne = axios.create({
  baseURL: "https://open.api.nexon.com",
  headers: {
    "x-nxopen-api-key": process.env.API_KEY,
  },
});

export default apiInstacne;
