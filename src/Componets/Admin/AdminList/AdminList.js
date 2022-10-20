import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
const AdminList = () => {
  // post admin data
  const [makeAdmin, setMakeAdmin] = useState({});
  // get admin data state

  const [admin, setAdmin] = useState([]);
  console.log(makeAdmin);
  const handleChange = (e) => {
    const makeAdminCopy = { ...makeAdmin };
    makeAdminCopy[e.target.name] = e.target.value;
    setMakeAdmin(makeAdminCopy);
  };

  // get admin data

  useEffect(() => {
    fetch("http://localhost:5000/admin/allAdmin")
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, []);

  // post admin data
  const handlesubmit = (e) => {
    console.log(makeAdmin);
    e.preventDefault();
    fetch("http://localhost:5000/admin/makeAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(makeAdmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          swal({
            title: "Good job!",
            text: `${data.error}`,
            icon: "danger",
            button: "OK",
          });
        } else {
          swal({
            title: "Good job!",
            text: `${data.message}`,
            icon: "success",
            button: "OK",
          });
        }
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="container">
            <div className="makeAdmin">
              <h3 className="myFont mt-5 ">Make a Admin </h3>
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    className="form-control p-2"
                    id="title"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    required
                    className="form-control p-2"
                    id="title"
                  />
                </div>

                <button className="btn-brand" type="submit">
                  Submit
                </button>
              </form>
            </div>

            {/* admin list */}
            <div className="adminList mt-5">
              <h3 className="myFont">Admin List</h3>
              <table
                className="table table-hover"
                style={{ width: "100%", padding: "50px" }}
              >
                <thead>
                  <tr
                    style={{ backgroundColor: "#0FCFE8" }}
                    className="text-secondary"
                  >
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>

                {admin.map((admin) => (
                  <tbody key={admin._id}>
                    <tr>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
