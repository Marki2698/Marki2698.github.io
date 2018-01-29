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
    
    //webpack-dev-server --hot

    render() {
        return(
            <nav className="navbar sticky-top navbar-expand-md bg-light custom-nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="NavBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="NavBar">
                    <div className="navbar-nav custom-list">
                    {
                        this.topics.map((topic, i) => <Item key={i} href={topic} click={(e) => this.GoTo(e)}/> )
                    }
                    </div>
                </div>
            </nav>
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