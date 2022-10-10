import httpClient from "./BaseURL";

function authenticate(){
    return httpClient.post(`/authenticate`);
}

export default authenticate;