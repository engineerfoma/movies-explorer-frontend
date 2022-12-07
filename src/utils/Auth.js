import { LOCAL_API } from "./constants";

const checkResponse = (response) =>
  response.ok ?
    response.json()
    : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));

const headers = {
  'Content-Type': "application/json",
};

export const register = ({ name, email, password }) => {
  return fetch(`${LOCAL_API}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers,
    body: JSON.stringify({ name, email, password })
  })
    .then(res => checkResponse(res));
};

export const authorize = ({ email, password }) => {
  return fetch(`${LOCAL_API}/signin`, {
    credentials: 'include',
    method: "POST",
    headers,
    body: JSON.stringify({ email, password })
  })
    .then(res => checkResponse(res));
};

export const signOut = () => {
  return fetch(`${LOCAL_API}/signout`, {
    credentials: 'include',
    method: 'GET',
  })
    .then((res => checkResponse(res)
    ));
}