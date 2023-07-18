import axios from "axios";


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
};

export default apiClient;