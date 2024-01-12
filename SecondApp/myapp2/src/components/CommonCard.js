import {React,useState} from "react";
import CommonModal from "./CommonModal";

export default function CommonCard({item}){

  const [modalState,setModal]=useState(false);

  const handleOpenModal=()=>{
    setModal(true)
  }

  const handleCloseModal=()=>{
    setModal(false)
  }


    return(
        <>
      <div class="wrapper">
        <>
        {modalState&&
            <CommonModal 
            item={item}
            handleCloseModal={handleCloseModal}/>
        }
        </>
      {/* <div class="top-icons">
          <i class="fas fa-long-arrow-alt-left"></i>
          <i class="fas fa-ellipsis-v"></i>
          <i class="far fa-heart"></i>
      </div> */}
      
      <div class="profile">
          <img 
          src={`https://robohash.org/${item?.id}?200x200`} alt="" class="thumbnail" />
          <div class="check"><i class="fas fa-check"></i></div>
          <h3 class="name">{item?.name}</h3>
          <p class="title">{item?.company.catchPhrase}</p>
          <p class="description">{item?.company.bs}</p>
          <button onClick={handleOpenModal} class="btn">VIEW DETAILS</button>
      </div>
    </div>
     </>
    )
}