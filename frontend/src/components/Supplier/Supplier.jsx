import React, { useEffect, useState } from "react";
import axios from "axios";

const Supplier = () => {
  const [name, setName] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [productionDate, setProductionDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [postSupplierDetails, setpostSupplierDetails] = useState([]);
  const [supplierDetails, setSupplierDetails] = useState([]);
  const handleSupplierDetails = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/supplier",
        {
          name,
          costPrice,
          sellPrice,
          productionDate,
          expiryDate,
          quantity,
          supplierName,
        }
      );
      console.log("data", data);
      setpostSupplierDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getSupplierDetails = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/supplier");
      console.log("data", data);
      setSupplierDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDeleteSupplier = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/supplier/${_id}`);
      console.log("data", ` data is deleted successfully`);
      getSupplierDetails();
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getSupplierDetails();
  }, [postSupplierDetails]);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#EFF0F5", height: "100%" }}
      >
        <div className="row">
          <div className="col ">
            <h6 style={{ color: "#157347", fontSize: "25px", padding: "10px" }}>
              Add Supplier Details
            </h6>
            <form
              onSubmit={handleSupplierDetails}
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
                  type="number"
                  placeholder="Enter Quantity"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="number"
                  placeholder="Enter Cost Price"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setCostPrice(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="number"
                  placeholder="Enter selling Price"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setSellPrice(e.target.value);
                  }}
                />
              </div>

              <div className="col-md-3 p-2">
                <input
                  type="date"
                  placeholder="Enter Prodction Date"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setProductionDate(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="date"
                  placeholder="Enter Expiry Date"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setExpiryDate(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="text"
                  placeholder="Enter Supplier Name"
                  style={{ width: "100%" }}
                  onChange={(e) => setSupplierName(e.target.value)}
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
                  <th scope="col">Quantity</th>
                  <th scope="col">Cost Price</th>
                  <th scope="col">Sell Price</th>
                  <th scope="col">Production Date</th>
                  <th scope="col">Expiry Date</th>
                  <th scope="col">Supplier Name</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {supplierDetails
                  ? supplierDetails.map((supplier, index) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{supplier.name}</td>
                            <td>{supplier.quantity}</td>
                            <td>{supplier.costPrice}</td>
                            <td>{supplier.sellPrice}</td>
                            <td>{supplier.productionDate}</td>
                            <td>{supplier.expiryDate}</td>
                            <td>{supplier.supplierName}</td>
                            <td style={{ display: "flex" }}>
                              <button className="btn btn-primary mx-2">
                                Edit
                              </button>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  handleDeleteSupplier(supplier._id);
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

export default Supplier;
