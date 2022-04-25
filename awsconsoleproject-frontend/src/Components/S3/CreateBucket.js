import s3service from "../../Services/s3service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateBucket = () => {
  const navigate = useNavigate();
  const [bucketname, setBucketName] = useState("");
  const bucketNameChanged = (e) => {
    //console.log(e.target.value);
    setBucketName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    s3service
      .createBucket({
        Bucket: bucketname,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div className="container centeralign">
      <form onSubmit={submitHandler}>
        <h1>Create Bucket</h1>
        <label>
          {" "}
          Bucket Name:{" "}
          <input
            type="string"
            name="bucketname"
            placeholder="Enter Bucket Name"
            onChange={bucketNameChanged}
          />
        </label>
        <button
          type="submit"
          className="btn btn-success"
          style={{ marginLeft: "5px" }}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBucket;
