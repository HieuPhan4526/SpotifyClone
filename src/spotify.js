import axios from "axios";
import { redirect } from "react-router-dom";
import Login from "./pages/auth/Login";


const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "31ee4bb5c031421ba6910ce3bcb4ad85";
const redirecUri = "http://localhost:3000";
const scope = ["user-library-read", "playlist-read-private"];

export const logionEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirecUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/"
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
    apiClient.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.response.status === 401) {
            window.localStorage.removeItem("token");
            return redirect("/feed");
        }
        return Promise.reject(error);
    });

};

export default apiClient;