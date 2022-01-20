import { height } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "54.5px",
        backgroundColor: "rgb(134, 255, 255)",
        display:"flex",
        alignItems:"center",
        fontFamily: "'Inter', sans-serif",
        flexDirection:"column",
        justifyContent:"space-between",
        paddingTop:"5px",
      }}
    >
      ©Book Share, Inc. 2022. All rights reserved.
      <div style={{
          width:"100%",
          height:"20px",
          backgroundColor:"aqua"
      }}></div>
    </div>
  );
}

export default Footer;
