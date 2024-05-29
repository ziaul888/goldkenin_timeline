import axios from "axios";
export const baseUrl = process.env.REACT_APP_API_URL;
const MainApi = axios.create({
    baseURL: baseUrl,
});
export default MainApi;