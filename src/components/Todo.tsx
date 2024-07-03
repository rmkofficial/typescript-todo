import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Todo() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "16px",
        marginTop: "25px",
      }}
    >
      <div>Ilk todo</div>
      <div>
        <IoMdRemoveCircleOutline
          className="icons"
          style={{ marginRight: "8px" }}
        />
        <FaEdit className="icons" />
      </div>
    </div>
  );
}

export default Todo;
