import axios from "axios";

const axiosPublicUrl = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

const UseAxiosPublic = () => {
  return axiosPublicUrl;
};

export default UseAxiosPublic;
