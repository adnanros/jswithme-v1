"use client"
import React, { useRef } from "react";

function Modal({toggleModal}) {

  const clickHandler = (event) => {
    if (event.target !== modalRef.current) {
        console.log('event.target', event.target, "modalRef.current" , modalRef.current);
        toggleModal();
    }
  }
  const modalRef = useRef(null);
  
  return (
    <div
      onClick={clickHandler}
      style={{
        background: "#fff",
        opacity: "90%",
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: "50",
      }}
    >
      <div
        className="w-1/2 mx-auto"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input ref={modalRef}
          className="w-full bg-indigo-200"
          name="search-input"
          type="text"
          placeholder="Find what you want"
        />
      </div>
    </div>
  );
}

export default Modal;
