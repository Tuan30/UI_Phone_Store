import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// const baseURL = 'http://localhost:5000/api/v1/'
const baseURL = "http://apiforlearning.zendvn.com/api";

export const api = {
  // goi api khong cần chuyền Token
  call: () => {
    return axios.create({
      baseURL,
    });
  },
};
