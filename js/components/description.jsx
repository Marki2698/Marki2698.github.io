import React from "react";
import PropTypes from "prop-types";

const Description = ({listener, classname, desc}) => 
<p onMouseOver={typeof listener === "string" ? () => { return false } : listener() } className={"desc " + classname}>{desc}</p>;

Description.propTypes = {
    listener: PropTypes.any,
    classname: PropTypes.string,
    desc: PropTypes.string
};

Description.defaultProps = {
    listener: "",
    classname: "",
    desc: "Description of my personality"
};

export default Description;