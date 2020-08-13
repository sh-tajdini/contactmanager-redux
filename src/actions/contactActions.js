import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "./types";
import axios from "axios";
export const getContacts = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

export const deleteContact = (id) => async (dispatch) => {
  //this try catch becuse of add contact we add could delete also it is not in jason
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  } catch (e) {}
  dispatch({
    type: DELETE_CONTACT,
    payload: id,
  });
};

export const addContact = (contact) => async (dispatch) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data,
  });
};
