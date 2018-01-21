import React from "react";
import PropTypes from "prop-types";

const Description = ({listener, classname, desc}) => 
<p onClick={typeof listener === "string" ? () => { return false } : listener() } className={"desc " + classname}>{desc}</p>;

/* class Description extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.AddListener = this.AddListener.bind(this);
    }

    AddListener(e) {
        if(typeof this.props.listener === "string") {
            return false;
        } else if(typeof this.props.listener === "function") {
             return this.props.listener(e);
        }
    }

    render() {
        return(
            <p onMouseOver={(e) => this.AddListener(e)} className={"desc " + this.props.classname}>{this.props.desc}</p>
        )
    }
} */

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