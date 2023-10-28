import React, { useEffect, useState } from "react";
import "./style.css";
import TakeTour from "./TakeTour";
import Football from "./Football";
import Entertainment from "./Entertainment";
import { call } from "../../config/axios"
import { GET_TOURS } from "../../config/endpoints";

function ToursAndTournaments() {

  const [data, setData] = useState({})

  const renderingFunction = async()=>{
    const payload = {
      website:["www.we2call.com"]    
    }
    await call(GET_TOURS, payload)
            .then((res)=>setData(res?.data?.data))
  }
  useEffect(()=>{ renderingFunction() },[])
  console.log(data)
  // const crickettours = []
  // const sportstour = []
  // const entertainmenttour = []
  // const casinotour = []
  // for (let i of data){
  //   if(i.tour_name === "1.Cricket Tour"){
  //     crickettours.push(i)
  //   }
  // }
  // console.log(crickettours)

  return (
    <div className="pl-1rem tours-main">
      <TakeTour />
      <Football />
      <Entertainment />
    </div>
  );
};

export default ToursAndTournaments;
