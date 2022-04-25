import axios from "axios";
const USER_BASE_URL = "http://localhost:3000/ec2";

class EC2Service {
  getInstances() {
    return axios.get(USER_BASE_URL + "/getInstances");
  }

  createInstance(instanceDetails) {
    return axios.post(USER_BASE_URL + "/setInstance", instanceDetails);
  }

  startInstance(instanceID) {
    return axios.post(USER_BASE_URL + "/startInstance", instanceID);
  }

  stopInstance(instanceID) {
    return axios.post(USER_BASE_URL + "/stopInstance", instanceID);
  }

  terminateInstance(instanceID) {
    return axios.post(USER_BASE_URL + "/terminateInstance", instanceID);
  }
}

export default new EC2Service();
