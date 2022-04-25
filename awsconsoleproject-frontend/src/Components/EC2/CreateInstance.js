import ec2Service from "../../Services/ec2service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateInstance = () => {
  const navigate = useNavigate();
  const [instanceid, setInstanceID] = useState("");
  const [instancetype, setInstanceType] = useState("");
  const [instancemincount, setInstanceMinCount] = useState();
  const [instancemaxcount, setInstanceMaxCount] = useState();

  const InstanceIDChanged = (e) => {
    //console.log(e.target.value);
    setInstanceID(e.target.value);
  };
  const InstanceTypeChanged = (e) => {
    //console.log(e.target.value);
    setInstanceType(e.target.value);
  };
  const InstanceMinCountChanged = (e) => {
    //console.log(e.target.value);
    setInstanceMinCount(e.target.value);
  };
  const InstanceMaxCountChanged = (e) => {
    //console.log(e.target.value);
    setInstanceMaxCount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    ec2Service
      .createInstance({
        ImageId: instanceid, //AMI_ID
        InstanceType: instancetype,
        MinCount: instancemaxcount,
        MaxCount: instancemincount,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div className="container centeralign">
      <h1>Create Instance</h1>
      <form onSubmit={submitHandler}>
        <label>
          ImageId:{" "}
          <input
            type="string"
            name="imageid"
            placeholder="Enter Image Id"
            onChange={InstanceIDChanged}
          ></input>
        </label>
        <br />
        <label>
          InstanceType:{" "}
          <input
            type="string"
            name="instancetype"
            placeholder="Enter Instance Type"
            onChange={InstanceTypeChanged}
          ></input>
        </label>
        <br />
        <label>
          MinCount:{" "}
          <input
            type="number"
            name="mincount"
            placeholder="Enter Min Count"
            onChange={InstanceMinCountChanged}
          ></input>
        </label>
        <br />
        <label>
          MaxCount:{" "}
          <input
            type="number"
            name="maxcount"
            placeholder="Enter Max Count"
            onChange={InstanceMaxCountChanged}
          ></input>
        </label>
        <br />
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

export default CreateInstance;
