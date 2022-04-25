import iamservice from "../../Services/iamservice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const userNameChanged = (e) => {
    //console.log(e.target.value);
    setUserName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    iamservice
      .createUser({
        UserName: username,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div class="container centeralign">
      <form onSubmit={submitHandler}>
        <h1>Create User</h1>
        <label>
          {" "}
          UserName:{" "}
          <input
            type="string"
            name="username"
            placeholder="Enter UserName"
            onChange={userNameChanged}
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

export default CreateUser;
