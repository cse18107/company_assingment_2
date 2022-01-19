import { height } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "rgb(134, 255, 255)",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
      }}
    >
      footer
      <div style={{
          width:"100%",
          height:"20px",
          backgroundColor:"aqua"
      }}></div>
    </div>
  );
}

export default Footer;
