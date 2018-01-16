import React from "react";
import PropTypes from "prop-types";
import Item from "../components/item.jsx";

class Navbar extends React.Component {
    constructor(props) {
        this.topics = this.props.topics;
        super(props);
    }

    GoTo(e) {
        e.preventDefault();
        alert(e.target.innerHTML);
    }

    render() {
        return(
            <div className="nav-bar">
                {
                    this.topics.map((i, topic) => {
                        <Item key={i} href={topic} onClick={(e) => this.GoTo(e)}/> 
                    })
                }
            </div>
        );
    }    
};

Navbar.propTypes = {
    topics: PropTypes.arrayOf(string)
};

Navbar.defaultProps = {
    topics: ["default", "default", "default", "default", "default"]
};

export default Navbar;