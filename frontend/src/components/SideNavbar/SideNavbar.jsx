import React from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <>
      <div
        className="container-fluid border"
        style={{
          marginTop: "0px",
          backgroundColor: "#EFF0F5",
        }}
      >
        <div className="row">
          <div className="col-md-12 border">
            <div>
              <Link to="/add-student" style={{ textDecoration: "none" }}>
                <h4 className="p-4 " style={{ color: "#157347" }}>
                  Pharmacy Management System
                </h4>
              </Link>
            </div>
            <div
              className="row"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <nav className="col">
                <div className="col border">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <span className="mx-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        fillRule="currentColor"
                        className="bi bi-person-plus-fill mx-3 pt-1"
                        viewBox="0 0 16 16"
                        style={{ color: "#157347" }}
                      >
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fillRule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>
                    </span>
                    <Link
                      to="/add-medicine"
                      className="mt-2"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Add Medicine
                    </Link>
                  </p>
                </div>
                <div className="col border">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <span className="mx-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        fillRule="currentColor"
                        className="bi bi-person-circle mx-3 pt-1"
                        viewBox="0 0 16 16"
                        style={{ color: "#157347" }}
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path
                          fillRule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                        />
                      </svg>
                    </span>
                    <Link
                      to="/add-sales"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                        color: "black",
                      }}
                      className="mt-2"
                    >
                      Sale Medicine
                    </Link>
                  </p>
                </div>
                <div className="col border">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <span className="mx-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        fillRule="currentColor"
                        className="bi bi-card-checklist mx-3 pt2"
                        viewBox="0 0 16 16"
                        style={{ color: "#157347" }}
                      >
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                      </svg>
                    </span>
                    <Link
                      to="/sales-history"
                      className="mt-2"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Sales History
                    </Link>
                  </p>
                </div>
                <div className="col border">
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <span className="mx-2 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        fillRule="currentColor"
                        className="bi bi-bank mx-3 pt-1"
                        viewBox="0 0 16 16"
                        style={{ color: "#157347" }}
                      >
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
                      </svg>
                    </span>
                    <Link
                      to="/supplier"
                      className="mt-2"
                      style={{
                        listStyle: "none",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Supplier
                    </Link>
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
