 import React, { useState } from "react";

 const DigitalTime =()=>{
     
    const time = new Date().toLocaleTimeString();

    const [utime , setUtime]= useState(time);
     
    const upDateTime =()=>{
    const time = new Date().toLocaleTimeString();
        setUtime(time);
    }
    setInterval(upDateTime , 1000);

    return(
        <div>
        <h1 className="position-absolute top-50 start-50 translate-middle bg-success p-2 text-dark bg-opacity-50">{utime}</h1>
        </div>
    )
 }
 export default DigitalTime;