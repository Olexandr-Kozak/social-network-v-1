import * as axios from "axios";


const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "4ea50a17-6bf5-4b05-91d4-0b54f238ce63"
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data
    });
  }
};

export const getUnFollow = (id) => {
  return instance.delete(`follow/${id}`).then(response => {
    return response.data
  });
}
export const getFollow = (id) => {
  return instance.post(`follow/${id}`).then(response => {
    return response.data
  });
}