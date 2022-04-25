import s3service from "../../Services/s3service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DeleteBucket = () => {
  const navigate = useNavigate();
  const [bucketname, setBucketName] = useState("");
  const bucketNameChanged = (e) => {
    //console.log(e.target.value);
    setBucketName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    s3service
      .deleteBucket({
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
        <h1>Delete Bucket</h1>
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
          className="btn btn-warning"
          style={{ marginLeft: "5px" }}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteBucket;
