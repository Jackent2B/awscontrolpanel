import ec2Service from "../../Services/ec2service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const StopInstance = () => {
  const navigate = useNavigate();
  const [instanceid, setInstanceID] = useState("");
  const instanceIdChanged = (e) => {
    //console.log(e.target.value);
    setInstanceID(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    ec2Service
      .stopInstance({
        InstanceIds: [instanceid],
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div className="container centeralign">
      <form onSubmit={submitHandler}>
        <h1>Stop Instance</h1>
        <label>
          {" "}
          InstanceId:{" "}
          <input
            type="string"
            name="instanceid"
            placeholder="Enter Instance Id"
            onChange={instanceIdChanged}
          />
        </label>
        <button
          type="submit"
          className="btn btn-warning"
          style={{ marginLeft: "5px" }}
        >
          Stop
        </button>
      </form>
    </div>
  );
};

export default StopInstance;
