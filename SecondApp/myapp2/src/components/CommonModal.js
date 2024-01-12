import React from "react";

export default function CommonModal({handleCloseModal,item}){


    return(
      <div class="App">
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal-content">
            <img
              src={`https://robohash.org/${item?.id}?200x200`}
              alt="robotsImage" />
            <p>USERNAME:{item?.username}</p>
            <p>NAME:{item?.name}</p>
            <p>CONTACT:{item?.phone}</p>
            <p>EMAIL:{item?.email}</p>

            {/* <p>PORTFOLIO:{item?.website}</p>
            <p>EMAIL:{item?.email}</p>
            <p>CONTACT:{item?.phone}</p> */}
            <button class="btn" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
    )

}