import React from "react";
import Image from "../components/image.jsx";

class Up extends React.Component {
    constructor(props) {
        super(props);
        this.src = this.props.src;
        this.alt = this.props.alt;
    }

    Up(e) {
        $(document).animate({
            scrollTo: 0
        }, "slow");
        return false;
    }

    render() {
        return(
            <div className="up-button">
                <Image src={this.src} alt={this.alt} onClick={(e) => this.Up(e)} />
            </div>
        )
    }
}

/* const Up = ({src, alt}) => <div>
    <Image src={src} alt={alt} />
</div>; */

export default Up;