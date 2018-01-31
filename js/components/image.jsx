import React from "react";
import PropTypes from "prop-types";

const Image = ({listener = "", src, alt, classname = ""}) => 
<img onClick={typeof listener === "string" ? () => { return false } : listener() } className={"image " + classname} src={src} alt={alt}/>;

/* class Image extends React.Component {
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
            <img onMouseOver={(e) => this.AddListener(e)} className={"image"} src={this.props.src} alt={this.props.alt}/>
        )
    }
} */

Image.propTypes = {
    listener: PropTypes.any,
    src: PropTypes.string,
    alt: PropTypes.string
};

Image.defaultProps = {
    listener: "",
    src: "images/semi.jpeg",
    alt: "default image"
};

export default Image;