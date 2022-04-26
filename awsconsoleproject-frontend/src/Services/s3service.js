import axios from "axios";
const USER_BASE_URL = "http://localhost:5000/s3";

class S3Service {
  getBuckets() {
    return axios.get(USER_BASE_URL + "/getBuckets");
  }

  createBucket(name) {
    return axios.post(USER_BASE_URL + "/setBucket", name);
  }

  deleteBucket(name) {
    return axios.post(USER_BASE_URL + "/removeBucket", name);
  }
}

export default new S3Service();
