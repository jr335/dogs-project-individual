import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark bg-secondary sticky-bottom"
          style={{ margin: "10px ", color: "#fff", justifyContent: "center" }}
        >
          <p>
            {" "}
            Developed by {""}
            <p>Henry M4</p>
            {/* <br /> */}
          </p>
        </nav>
      </div>
    );
  }
}

