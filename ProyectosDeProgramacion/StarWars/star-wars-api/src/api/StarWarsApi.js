import axios from "axios";

const URL = "https://swapi.dev/api/";

export function getPeople() {
  return axios.get(`${URL}/people/`);
}

export function getHomeWorld(url) {
  return axios.get(url);
}
