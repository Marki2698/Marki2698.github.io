import React from "react";
import Image from "../components/image.jsx";

class Up extends React.Component {
    constructor(props) {
        super(props);
        this.src = this.props.src;
        this.alt = this.props.alt;
    }

    Up(e) {
        return function(e) {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        }
    }

    render() {
        return(
            <div className="up-button">
                <Image listener={(e) => this.Up(e)} src={this.src} alt={this.alt} classname={"hidden"}/>
            </div>
        )
    }
}

/* const Up = ({src, alt}) => <div>
    <Image src={src} alt={alt} />
</div>; */

export default Up;