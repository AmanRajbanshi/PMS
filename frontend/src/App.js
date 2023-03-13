import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Medicine from "./components/Medicine/Medicine";
import SaleMedicine from "./components/SaleMedicine/SaleMedicine";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Supplier from "./components/Supplier/Supplier";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div style={{ display: "flex" }}>
                  <div className="col-md-3 border">
                    <SideNavbar />
                  </div>
                  <div className="col-md-9 border"></div>
                </div>
              </>
            }
          />
          <Route
            path="/add-medicine"
            element={
              <>
                <div style={{ display: "flex" }}>
                  <div
                    className="col-md-3"
                    style={{
                      // border: "1px solid red",
                      backgroundColor: "#EFF0F5",
                    }}
                  >
                    <SideNavbar />
                  </div>
                  <div
                    className="col-md-9 border"
                    style={{ border: "1px solid red" }}
                  >
                    <Medicine />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/add-sales"
            element={
              <>
                <div style={{ display: "flex" }}>
                  <div className="col-md-3 border">
                    <SideNavbar />
                  </div>
                  <div className="col-md-9 border">
                    <SaleMedicine />
                  </div>
                </div>
              </>
            }
          />
          {/* <Route
            path="/supplier"
            element={
              <>
                <div style={{ display: "flex" }}>
                  <div className="col-md-3 border">
                    <SideNavbar />
                  </div>
                  <div className="col-md-9 border">
                    <Teacher />
                  </div>
                </div>
              </>
            }
          /> */}
          <Route
            path="/supplier"
            element={
              <>
                <div style={{ display: "flex" }}>
                  <div className="col-md-3 border">
                    <SideNavbar />
                  </div>
                  <div className="col-md-9 border">
                    <Supplier />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
