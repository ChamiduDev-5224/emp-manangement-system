import React from "react";
import Header from "../Components/Header";
import Buttonsection from "../Components/Button.section";
import Tablesection from "../Components/Table.section";

function Mainpage() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="button-section">
        <Buttonsection />
      </div>
      <div className="table">
        <Tablesection />
      </div>
    </div>
  );
}

export default Mainpage;
