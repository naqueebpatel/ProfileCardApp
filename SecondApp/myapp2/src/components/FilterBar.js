import React, { useState } from "react";

export default function FilterBar({handleNameChange,dropData}){

//const [name,setName]=useState("");

const storeNameChange=(event)=>{
  const{value}=event.target;
  //setName(value);
  handleNameChange(value);
  //console.log(name);
}


  
  return(
    <div class="search">
     <input type="search" placeholder="SEARCH BY NAME" onChange={storeNameChange} />
      </div>
  )
}
//      {/* <div>
//      <label for="cars">Choose a car:</label>
//       <select name="cars" id="cars">
//        {
//         dropData.map((item)=>{
//           <option value={item?.name} >{item?.name}</option>
//         })
//        }
//        </select>
//      </div>
    
//     </div> */}
//       )
