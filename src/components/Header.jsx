import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import vk2 from "../images/vk2.png";
import "./Header.css"; // Import your custom CSS file for additional styling

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-dark py-3">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          {/* Wrap logo and toggle button inside a  div */}
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center">
              <img
                src={vk2} // Replace with your company logo image URL
                className="logo" // Apply custom CSS class for logo
                alt="Company Logo"
                style={{ backgroundColor: "lightgray", borderRadius: "50px" }}
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Nav items */}
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/home"
                  onClick={() => setIsNavOpen(false)}
                >
                  HomePage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/page1"
                  onClick={() => setIsNavOpen(false)}
                >
                  Page1
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/page2"
                  onClick={() => setIsNavOpen(false)}
                >
                  Page2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/page3"
                  onClick={() => setIsNavOpen(false)}
                >
                  Page3
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// // import React, { useState, useEffect } from "react";
// // import { NavLink, useLocation } from "react-router-dom";

// // const Header = () => {
// //   const [currentPage, setCurrentPage] = useState("Home");
// //   const [isNavOpen, setIsNavOpen] = useState(false); // Define isNavOpen state
// //   const location = useLocation();

// //   const toggleNav = () => {
// //     setIsNavOpen(!isNavOpen);
// //   };

// //   // Update currentPage based on the current location
// //   useEffect(() => {
// //     switch (location.pathname) {
// //       case "/page1":
// //         setCurrentPage("Page1");
// //         break;
// //       case "/page2":
// //         setCurrentPage("Page2");
// //         break;
// //       default:
// //         setCurrentPage("Home");
// //     }
// //   }, [location.pathname]);

// //   return (
// //     <>
// //       <header className="bg-dark py-3">
// //         <div className="container">
// //           <nav className="navbar navbar-expand-lg navbar-dark">
// //             <NavLink
// //               className="nav-link"
// //               to="/"
// //               onClick={() => setIsNavOpen(false)}
// //             >
// //               <h1 className="navbar-brand">{currentPage}</h1>
// //             </NavLink>
// //             <button
// //               className="navbar-toggler"
// //               type="button"
// //               onClick={toggleNav}
// //               aria-label="Toggle navigation"
// //             >
// //               <span className="navbar-toggler-icon"></span>
// //             </button>
// //             <div
// //               className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
// //             >
// //               <ul className="navbar-nav ms-auto">
// //                 <li className="nav-item">
// //                   <NavLink
// //                     className="nav-link"
// //                     to="/page1"
// //                     onClick={() => setIsNavOpen(false)}
// //                   >
// //                     Page1
// //                   </NavLink>
// //                 </li>
// //                 <li className="nav-item">
// //                   <NavLink
// //                     className="nav-link"
// //                     to="/page2"
// //                     onClick={() => setIsNavOpen(false)}
// //                   >
// //                     Page2
// //                   </NavLink>
// //                 </li>
// //               </ul>
// //             </div>
// //           </nav>
// //         </div>
// //       </header>
// //     </>
// //   );
// // };

// // export default Header;

// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import vk2 from "../images/vk2.png";

// const Header = () => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home" className="mx-5">
//         <img
//           src={vk2} // Replace with your company logo image URL
//           height="30"
//           className="d-inline-block align-top"
//           alt="Company Logo"
//           style={{ borderRadius: "50px" }}
//         />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto" style={{ marginLeft: "80px" }}>
//           <Nav.Link href="#home" className="mx-5">
//             Home
//           </Nav.Link>{" "}
//           {/* Add mx-3 for horizontal margin */}
//           <Nav.Link href="#about" className="mx-5">
//             About
//           </Nav.Link>{" "}
//           {/* Add mx-3 for horizontal margin */}
//           <Nav.Link href="#contact" className="mx-5">
//             Contact Us
//           </Nav.Link>{" "}
//           {/* Add mx-3 for horizontal margin */}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default Header;
