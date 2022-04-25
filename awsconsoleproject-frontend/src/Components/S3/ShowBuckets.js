import s3service from "../../Services/s3service";
import { useEffect, useState } from "react";

const ShowBuckets = () => {
  const [buckets, setBuckets] = useState([]);
  useEffect(() => {
    s3service.getBuckets().then((res) => {
      setBuckets(res.data.Buckets);
      //console.log(res);
    });
  }, []);
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Bucket Name</th>
            <th scope="col">Bucket Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {buckets.map((bucket) => {
            return (
              <tr>
                <td>{bucket.Name}</td>
                <td>{bucket.CreationDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBuckets;
