import React from "react";
import DOM from "react-dom";

//let topics = ["Marki2698", "About me", "What I know", "What I've made", "Contact with me"];

const item = ({href}) => <a href={"#" + href} className="navbar-item"> {href} </a>;

export default item;
//module.exports = item;