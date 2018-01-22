import React from "react";
//import PropTypes from "prop-types";

const sources = [
    "../../node_modules/bootstrap/dist/bootstrap.js",
    "../../node_modules/tooltip.js/dist/tooltip.js",
    "../../node_modules/pooper.js/dist/pooper.js",
    "../../node_modules/jquery/dist/jquery.js"
];

const Scripts = () => 
    sources.map((val, i) => {
        <script key={i} type="text/javascript" src={val}></script>
    })


export default Scripts;