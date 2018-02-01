import React from "react";
import PropTypes from "prop-types";
import Item from "../components/item.jsx";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.topics = this.props.topics;
    }

    GoTo(href) {
        return function (e) {
            e.preventDefault();
            if($("button.navbar-toggler").css("display") !== "none") {
                $("button.navbar-toggler").click();
            }
            $("html, body").animate({
                scrollTop: $("#" + href + "").offset().top - 50
            }, 1000);
        }
    }
    
    //webpack-dev-server --hot

    render() {
        return(
            <nav className="navbar fixed-top navbar-expand-md custom-nav">
                <button className="navbar-toggler navbar-dark custom-nav-btn" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="NavBar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="NavBar">
                    <div className="navbar-nav custom-list">
                    {
                        this.topics.map((val, i) => <Item key={i} href={val.href} desc={val.desc} click={this.GoTo(val.href)} /> )
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
    topics: PropTypes.array
};

Navbar.defaultProps = {
    topics: ["default", "default", "default", "default", "default"]
};

export default Navbar;