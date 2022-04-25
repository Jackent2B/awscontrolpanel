import axios from "axios";
const USER_BASE_URL = "http://localhost:3000/iam";

class IAMService {
  getUser() {
    return axios.get(USER_BASE_URL + "/getIAMusers");
  }

  createUser(userdetails) {
    return axios.post(USER_BASE_URL + "/setIAMuser", userdetails);
  }
}

export default new IAMService();
