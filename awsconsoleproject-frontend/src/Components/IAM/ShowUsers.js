import iamservice from "../../Services/iamservice";
import { useEffect, useState } from "react";
const ShowUsers = () => {
  const [usernames, setUserName] = useState([]);
  useEffect(() => {
    iamservice.getUser().then((res) => {
      setUserName(res.data.Users);
      //console.log(res);
    });
  }, []);
  return (
    <div class="container centeralign">
      <h1>Users List</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">UserName</th>
            <th scope="col">User ID</th>
          </tr>
        </thead>
        <tbody>
          {usernames.map((username) => {
            return (
              <tr>
                <td>{username.UserName}</td>
                <td>{username.UserId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;
