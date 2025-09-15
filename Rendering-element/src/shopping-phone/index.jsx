import React, { useState } from "react";
import Phone from "./phone";
import data from './dataPhone.json';
export default function ShoppingPhone() {
  const [listPhone,setListPhone] = useState(data)
  const renderListPhone = () =>{
    return listPhone.map((item)=>{
      return <Phone key={item.maSP}/>
    })
  }
  return (
    <div className="container mx-auto">
      <h1>Shopping Phone</h1>
      <div className="grid grid-cols-3">
        {renderListPhone()}
      </div>
    </div>
  );
}
