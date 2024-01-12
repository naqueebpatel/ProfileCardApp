import './App.css';
import React, { useState,useEffect } from 'react';
import CommonCard from './components/CommonCard';
import FilterBar from './components/FilterBar';
// import { apiData } from './apiData';

function App() {

  const [data, setData] = useState();
  const [apiData,setApiData]=useState();
   
    useEffect(() => {
        async function fetchData() {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          const data = await response.json();
          console.log(data);
          setData(data);     //setting data which will change everytime for mapping
          setApiData(data);  //setting data which will remain constant for filtering purpose 
        }
        fetchData();
      }, []);


      const handleNameChange=(name)=>{
        const filteredData=apiData.filter((item)=>{                        //filtering data using constant apiData and storing in filtered data and changing values of data everytime for live reload
          if(item?.name.toLowerCase().includes(name.toLowerCase())){
            return item;
          }
          else{
            return false;
          }
        })
        setData(filteredData)
      }
      
     return(
      <div>
        <div >
        <FilterBar handleNameChange={handleNameChange} dropData={apiData} />
        </div>
        
      
      
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

        {data&&data.map((item)=>{
            return(
            <CommonCard
            item={item}
            />
            )
        })}
        </div>
        </div>

        
     )
}

export default App;
