import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import swal from "sweetalert";
import "./AddClass.css";
import Loading from "../../Loading/Loading";
const AddClass = () => {
  // class add state
  const [classAdd, setClassAdd] = useState({});
  // file upload information
  const [file, setFile] = useState(null);
  // read more state // and single Data load
  const [singleDataLoad, setSingleDataLoad] = useState({});
  //  all class info
  const [classInfo, setClassInfo] = useState([]);
  // update class information
  const [classUpdate, setClassUpdate] = useState({});

  // update modal close
  const [closeModal, setCloseModal] = useState(false);
  // all data load

  // loading state

  const [loading, setLoading] = useState({
    noData: false,
    loadingSpin: true,
  });
  // button spinner state
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/dashboard/classget")
      .then((res) => res.json())
      .then((data) => setClassInfo(data));
  }, []);

  // handle change title description
  const handleChange = (e) => {
    const newClass = { ...classAdd };
    newClass[e.target.name] = e.target.value;
    setClassAdd(newClass);
  };

  // handle file
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  // handle submit all information and photo
  const handleSubmit = (e) => {
    setSpinner(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", classAdd.title);
    formData.append("description", classAdd.description);

    fetch("http://localhost:5000/dashboard/classAdd", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setSpinner(false);
          swal({
            title: "Worng..",
            text: `${data.error}`,
            icon: "warning",
            dangerMode: true,
            button: "OK",
          });
        } else {
          setSpinner(false);
          swal({
            title: "Good job!",
            text: `${data.message}`,
            icon: "success",
            button: "OK",
          });
          // after submit all data load
          fetch("http://localhost:5000/dashboard/classget")
            .then((res) => res.json())
            .then((data) => setClassInfo(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // single data load database with read more
  const handleSingleDataLoad = (id) => {
    fetch("http://localhost:5000/dashboard/classSingle/" + id)
      .then((res) => res.json())
      .then((data) => setSingleDataLoad(data));
  };

  // handle delete

  const handleDelete = (id) => {
    console.log("my id:", id);
    fetch("http://localhost:5000/dashboard/classDelete/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("http://localhost:5000/dashboard/classget")
          .then((res) => res.json())
          .then((data) => setClassInfo(data));

        swal("Good job!", "You clicked the button!", "success");
      });
  };

  // on changle update modal
  const handleModalChange = (e) => {
    const newUpdate = { ...classUpdate };
    newUpdate[e.target.name] = e.target.value;
    setClassUpdate(newUpdate);
  };

  // handle update with photo
  const handleUpdateSubmit = (id) => {
    const formData = new FormData();
    formData.append("title", classUpdate.title);
    formData.append("description", classUpdate.description);
    formData.append("id", classUpdate._id);
    formData.append("file", file);
    fetch("http://localhost:5000/dashboard/classupdate/" + id, {
      method: "PATCH",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          swal({
            title: "Worng..",
            text: `${data.error}`,
            icon: "warning",
            dangerMode: true,
            button: "OK",
          });
        } else {
          swal({
            title: "Good job!",
            text: `${data.message}`,
            icon: "success",
            button: "OK",
          });
          // after submit all data load
          fetch("http://localhost:5000/dashboard/classget")
            .then((res) => res.json())
            .then((data) => {
              setClassInfo(data);
              setCloseModal(true);
            });
        }
      });
  };

  // loading time out
  setTimeout(() => {
    const newLoading = { ...Loading };
    newLoading.loadingSpin = false;
    newLoading.noData = true;
    setLoading(newLoading);
  }, 5000);
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>

      <div className="col-md-9  ">
        <h1 className="mt-3 mb-5">ADD CLASS</h1>
        <form onSubmit={handleSubmit} className="container">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              required
              className="form-control p-2"
              id="title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              onChange={handleChange}
              required
              className=" p-5 form-control p-2"
              id="description"
            />
          </div>

          <div className="mb-3">
            <input type="file" name="file" onChange={handleFileChange} />
          </div>
          <button type="submit" className=" btn btn-primary">
            {spinner && (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}{" "}
            Submit
          </button>
        </form>

        {/* class list table */}
        <h4 className="mt-5">
          {" "}
          Total Class :
          {classInfo.length <= 0 ? <span>Loading...</span> : classInfo.length}
        </h4>
        <div className="tableContainer mt-5">
          {classInfo.length <= 0 ? (
            (loading.loadingSpin && <Loading />) ||
            (loading.noData && (
              <h2 className="text-center mt-5">No data fetch</h2>
            ))
          ) : (
            <table
              className="table table-hover"
              style={{ width: "100%", padding: "50px" }}
            >
              <thead>
                <tr
                  style={{ backgroundColor: "#0FCFE8" }}
                  className="text-secondary"
                >
                  <th scope="col">Photo</th>
                  <th scope="col">Title</th>
                  <th className="w-50" scope="col">
                    Description
                  </th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {classInfo.map((classInfo) => (
                <tbody key={classInfo._id}>
                  <tr>
                    <td className="classPhoto">
                      <img
                        onClick={() => handleSingleDataLoad(classInfo._id)}
                        type="button"
                        class="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@fat"
                        className="img-fluid"
                        src={` http://localhost:5000/file/${classInfo.img}`}
                        alt=""
                      />
                    </td>
                    <td>{classInfo.title}</td>
                    <td>
                      {classInfo.description.slice(0, 100)}

                      <button
                        onClick={() => handleSingleDataLoad(classInfo._id)}
                        type="button"
                        class="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@fat"
                      >
                        <b>Read More...</b>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleSingleDataLoad(classInfo._id)}
                        type="button"
                        class="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <i className="fa-solid fa-pen-to-square fs-5"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(classInfo._id)}
                        className="btn"
                      >
                        <i className="fa-solid fa-trash fs-5"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
        </div>

        {/* Read more modal  */}

        <div className="singleDataLoadModal">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    {singleDataLoad.title}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <img
                    className="img-fluid"
                    src={` http://localhost:5000/file/${singleDataLoad.img}`}
                    alt=""
                  />
                  <div class="modal-dialog modal-dialog-scrollable">
                    <p>{singleDataLoad.description}</p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* update modal  */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  UPDATE CLASS
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      TITLE:
                    </label>
                    <input
                      onChange={handleModalChange}
                      type="text"
                      name="title"
                      required
                      defaultValue={singleDataLoad.title}
                      className="form-control p-3"
                      id="recipient-name"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="description" className="col-form-label">
                      DESCRIPTION:
                    </label>
                    <textarea
                      onChange={handleModalChange}
                      type="text"
                      name="description"
                      required
                      defaultValue={singleDataLoad.description}
                      className="form-control p-5"
                      id="description"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="file" className="col-form-label">
                      PHOTO
                    </label>
                    <input
                      onChange={handleFileChange}
                      type="file"
                      name="file"
                      className="form-control"
                      id="file"
                    />
                  </div>
                </form>
                <div className="modal-footer">
                  <button
                    onClick={() => handleUpdateSubmit(singleDataLoad._id)}
                    type="submit"
                    data-bs-dismiss={`${closeModal && "modal"}`}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
