import React from "react";
import Card from "./Card";

function Destinations() {
  return (
    <div>
      <br></br>
      <div className="text-center">
        <p className=" font-bold text-3xl pb-4 text-[#166e1b] self-center">
          Travel Destinations
        </p>
      </div>
      <br></br>
      <div className="grid grid-flow-rows grid-cols-3 gap-12 px-16">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default Destinations;
