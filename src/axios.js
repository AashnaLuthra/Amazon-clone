import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e516c/us-central1/api' //the api (cloud func) URL
});

export default instance;

// 'https://us-central1-clone-e516c.cloudfunctions.net/api'