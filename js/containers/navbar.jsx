import React from "react";
import PropTypes from "prop-types";
import Item from "../components/item.jsx";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.topics = this.props.topics;
    }

    GoTo(e) {
        e.preventDefault();
        alert(e.target.innerHTML);
    }

    render() {
        return(
            <div className="navbar custom-navbar">
                    {
                        this.topics.map((topic, i) => <Item key={i} href={topic} click={(e) => this.GoTo(e)}/> )
                    }
            </div>
        )
    }    
};

/* function GoTo(e) {
    e.preventDefault();
    alert(e.target.innerHTML);
}

const Navbar = ({topics}) => <div className="nav-bar">
    { 
        topics.map((topic, i) => 
            <Item key={i} href={topic} onClick={(e) => GoTo(e)} /> 
        )
    }
</div>; */

Navbar.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.string)
};

Navbar.defaultProps = {
    topics: ["default", "default", "default", "default", "default"]
};

export default Navbar;