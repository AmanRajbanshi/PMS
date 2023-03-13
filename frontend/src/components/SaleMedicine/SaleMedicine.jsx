import axios from "axios";
import React, { useEffect, useState } from "react";

const SaleMedicine = () => {
  const [customerName, setCustomerName] = useState();
  const [medicineName, setMedicineName] = useState();
  const [quantity, setQuantity] = useState();
  const [date, setDate] = useState();
  const [postCustomerDetails, setPostCustomerDetails] = useState();
  const [customerDetails, setCustomerDetails] = useState([]);
  // const [customerDetails, setCustomerDetails] = useState({
  //   cname: customerName,
  //   mname: medicineName,
  //   qty: quantity,
  //   dt: date,
  // });
  // const handle = (e) => {
  //   e.preventDefault();
  //   setCustomerDetails({
  //     cname: customerName,
  //     mname: medicineName,
  //     qty: quantity,
  //     dt: date,
  //   });
  // };

  const handleCustomerDetails = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/customer",
        {
          customerName,
          medicineName,
          quantity,
          date,
        }
      );
      console.log("data", data);
      setPostCustomerDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const getCustomerDetails = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/customer");
      console.log("data", data);
      setCustomerDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleDeleteCustomer = async (_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/customer/${_id}`);
      console.log("data", ` data is deleted successfully`);
      getCustomerDetails();
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCustomerDetails();
  }, [postCustomerDetails]);

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#EFF0F5", height: "100%" }}
      >
        <div className="row">
          <div className="col ">
            <h6 style={{ color: "#157347", fontSize: "25px", padding: "10px" }}>
              Sell Medicine
            </h6>
            <form
              onSubmit={handleCustomerDetails}
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
                  placeholder="Enter Customer Name"
                  style={{ width: "100%" }}
                  // onChange={handleCustomerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="text"
                  placeholder="Enter medicine name"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setMedicineName(e.target.value);
                  }}
                  // onChange={handleMedicineName}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="text"
                  placeholder="Enter Quantity"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  // onChange={handleQuantity}
                />
              </div>
              <div className="col-md-3 p-2">
                <input
                  type="date"
                  placeholder="Enter Date "
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  // onChange={handledate}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Medicine Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Date Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {customerDetails
                ? customerDetails.map((customer, index) => {
                    return (
                      <>
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{customer.customerName}</td>
                          <td>{customer.medicineName}</td>
                          <td>{customer.quantity}</td>
                          <td>{customer.date}</td>
                          <td style={{ display: "flex" }}>
                            <button className="btn btn-primary mx-2">
                              Edit
                            </button>
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                handleDeleteCustomer(customer._id);
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
          ;{console.log(customerDetails)}
        </div>
      </div>
    </>
  );
};

export default SaleMedicine;
