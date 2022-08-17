import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links, social } from "./data";
import "../App.css";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <h1>Management</h1>
        </div>
        <nav className={`${show ? "mobile-nav" : "list"}`}>
          <ul>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <Link to={url} key={id}>
                  {" "}
                  <li key={id}> {text} </li>
                </Link>
              );
            })}
          </ul>
        </nav>

        <div className="toggleBtn">
          <button onClick={() => setShow(!show)}>
            {show ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
