import React from "react";
import myImage from "./IMG_20221122_091756.jpg";
import "./App.css"
function ProfilePhoto() {
  return (
    <div>
      <img src={myImage} alt="" className="image" />
    </div>
      
  );
}

export default ProfilePhoto;
