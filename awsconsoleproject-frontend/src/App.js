import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import CreateBucket from "./Components/S3/CreateBucket";
import DeleteBucket from "./Components/S3/DeleteBucket";
import ShowBucket from "./Components/S3/ShowBuckets";
import Home from "./Components/Home/Home";
import CreateInstance from "./Components/EC2/CreateInstance";
import ShowInstances from "./Components/EC2/ShowInstances";
import StartInstance from "./Components/EC2/StartInstance";
import StopInstance from "./Components/EC2/StopInstance";
import TerminateInstance from "./Components/EC2/TerminateInstance";
import ShowUsers from "./Components/IAM/ShowUsers";
import CreateUser from "./Components/IAM/CreateUser";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createinstance" element={<CreateInstance />} />
        <Route path="/listinstance" element={<ShowInstances />} />
        <Route path="/startinstance" element={<StartInstance />} />
        <Route path="/stopinstance" element={<StopInstance />} />
        <Route path="/terminateinstance" element={<TerminateInstance />} />
        <Route path="/listbucket" element={<ShowBucket />} />
        <Route path="/createbucket" element={<CreateBucket />} />
        <Route path="/deletebucket" element={<DeleteBucket />} />
        <Route path="/listuser" element={<ShowUsers />} />
        <Route path="/createuser" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
