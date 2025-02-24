import React from "react";
import "./overveiw.css"; // Keep the filename consistent

export default function Overview() {
  const stats = [
    { count: 578, label: "Total Task" },
    { count: 78, label: "Pending Task" },
    { count: 500, label: "Completed Task" },
    { count: 12, label: "In Reveiw" },
]
  return (
    <div className="adminpanel w-100 d-flex flex-row flex-wrap justify-content-sm-center  mt-5">
      <div className="top-panel d-flex flex-wrap flex-row justify-content-center ">
        {stats.map((item, index) => (
          <div key={index} className=" postedjobs postedjobsclick  d-flex flex-column">
            <p className="w-100 text-center text-count" >
              {item.count}
            </p>
            <p className="w-100 text-center text-label">{item.label}</p>
          </div>


        ))}
      </div>
    </div>
  );
}
