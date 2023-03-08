import axios from "axios";
const api_key: any = process.env.REACT_APP_MOVIEDB_KEY;
export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key,
  },
});
