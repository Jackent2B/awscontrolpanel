import ec2Service from "../../Services/ec2service";
import { useEffect, useState } from "react";
const ShowInstances = () => {
  const [instances, setInstances] = useState([]);
  useEffect(() => {
    ec2Service.getInstances().then((res) => {
      setInstances(res.data.Reservations);
    });
  }, []);
  return (
    <div className="container ">
      <h1>Instances List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Created at</th>
            <th>Image Id</th>
            <th>Status</th>
          </tr>
          {instances.map((instance) => (
            <tr key={instance.Instances[0].InstanceId}>
              <td>{instance.Instances[0].LaunchTime}</td>
              <td>{instance.Instances[0].ImageId}</td>
              <td>{instance.Instances[0].State.Name}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default ShowInstances;
