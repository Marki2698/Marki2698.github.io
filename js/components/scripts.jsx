import React from "react";
//import PropTypes from "prop-types";

/* const sources = [
    "../../node_modules/bootstrap/dist/bootstrap.js",
    "../../node_modules/tooltip.js/dist/tooltip.js",
    "../../node_modules/pooper.js/dist/pooper.js",
    "../../node_modules/jquery/dist/jquery.js"
]; */

const Script = val => <script type="text/javascript" src={val}></script>;

const Scripts = sources => 
<div>
    sources.map((val, i) => {
        <Script key={i} val={val} />
    })
</div>

export default Scripts;