import axios from "axios";
import React, { useEffect, useState } from "react";

const Medicine = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [genericName, setGenericName] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [medicineDetails, setMedicineDetails] = useState([]);
  const [postMedicineDetails, setPostMedicineDetails] = useState([]);

  const handleMedicineDetails = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/medicine",
        {
          name,
          category,
          genericName,
          supplierName,
        }
      );
      console.log("data", data);
      setPostMedicineDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getMedicineDetails = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/medicine");
      console.log("data", data);
      setMedicineDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDeleteMedicine = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/medicine/${_id}`);
      console.log("data", ` data is deleted successfully`);
      getMedicineDetails();
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getMedicineDetails();
  }, [postMedicineDetails]);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#EFF0F5", height: "100%" }}
      >
        <div className="row">
          <div className="col ">
            <h6 style={{ color: "#157347", fontSize: "25px", padding: "10px" }}>
              Add Medicine Details
            </h6>
            <form
              onSubmit={handleMedicineDetails}
              className="border"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "5px",
              }}
            >
              <div className="col-md-3 p-2">
                <input
                  type="text"
                  placeholder="Enter Medicine Name"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="text"
                  placeholder="Enter category name"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="text"
                  placeholder="Enter Generic Name"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setGenericName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="text"
                  placeholder="Enter Supplier Name"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setSupplierName(e.target.value);
                  }}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Generic Name</th>
                  <th scope="col">Supplier Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {medicineDetails
                  ? medicineDetails.map((medicine, index) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{medicine.name}</td>
                            <td>{medicine.category}</td>
                            <td>{medicine.genericName}</td>
                            <td>{medicine.supplierName}</td>
                            <td style={{ display: "flex" }}>
                              <button className="btn btn-primary mx-2">
                                Edit
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  handleDeleteMedicine(medicine._id);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medicine;
