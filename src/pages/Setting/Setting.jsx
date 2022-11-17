import React from "react";
import NavbarSetting from "../../components/NavbarSetting/NavbarSetting";

function Setting() {
  return (
    <div className="flex">
       <div className="basis-1/6 h-5/6 border-r-2 p-2 border-gray-700">
       <NavbarSetting />
      </div>
      <div className="basis-5/6">
        <li>Indonesia</li>
        <li>Default</li>
        <br></br>
        <li>ON/OFF</li>
      </div>
    </div>
  );
}

export default Setting;
