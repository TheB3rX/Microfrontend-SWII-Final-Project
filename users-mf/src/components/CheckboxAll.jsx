import React from "react";
import "./CheckboxAll.css";

const CheckboxAll = ({ allChecked, onChange }) => (
  <div className="checkbox_all">
    <input type="checkbox" id="miCheckbox" checked={allChecked} onChange={onChange} />
  </div>
);

export default CheckboxAll;
