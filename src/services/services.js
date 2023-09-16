import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api"
});

export const getAllRecords = async (sortBy, sortDirection, searchTerm) => {
  let response;
  try {
    response = (await instance.get(`/todos?sortBy=${sortBy}&sortDirection=${sortDirection}&searchTerm=${searchTerm || ""}`))?.data;
  } catch (error) {
    console.log("Error in getAllRecords:", error.message);
  }
  return response
};

export const insertRecords = async (data) => {
  let response;
  try {
    response = (await instance.post(`/todo`, data));
  } catch (error) {
    console.log("Error in insertRecords:", error.message);
  }
  return response
};
export const deleteRecord = async (id) => {
  let response;
  try {
    response = (await instance.delete(`/todo?id=${id}`));
  } catch (error) {
    console.log("Error in deleteRecords:", error.message);
  }
  return response
};
