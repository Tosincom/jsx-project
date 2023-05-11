
import React from "react";
import  densel from "../asset/densel.jpeg"
import PropTypes from "prop-types"
function Project(props) {
function handleName(){
  alert ("Densel washington")
}
  return (
    <div>
      <h1>About {props.fullname}</h1>
      <p>{props.fullname}</p>
      <p>{props.bio}</p>
      <p>{props.profession}</p>
      <img src={densel} alt="" />
      {props.children}
      <br />
<button onClick={() =>alert("Densel washington")}>My name</button>
    </div>
  );
  }

  Project.defaultProps = {
    fullname : "Densel washington"
  };

  Project.prototype = {
    fullname : PropTypes.string


  }

export default Project;