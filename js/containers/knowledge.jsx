import React from "react";
import PropTypes from "prop-types";
import Image from "../components/image.jsx";
import Description from "../components/description.jsx";

//technology will be array of objects [{src: "", alt: "", desc: ""}]

class Knowledge extends React.Component {
    constructor(props) {
        super(props);
        this.technology = this.props.technology;
        //this.index = 1;
    }
    
    ShowDesc(e) {
        /* if(e.target.tagname === "IMG") {
            e.target.nextElementSibling.classList.toggle("hidden");
        } else if(e.target.tagname === "P") {
            e.target.classList.toggle("hidden");
        } */
        return function(e) {
            if(e.target.tagName.toLowerCase() === "img") {
                e.target.nextElementSibling.classList.toggle("hidden");
            } else if(e.target.tagName.toLowerCase() === "p") {
                e.target.classList.toggle("hidden");
            }
        }
    }

    render() {
        return(
            <section className="knowledge">
                    {
                        this.technology.map((val, i) => 
                            <div key={i} className="technology" >
                                <Image listener={(e) => this.ShowDesc(e)} src={val.src} alt={val.alt}/>
                                <Description listener={(e) => this.ShowDesc(e)} classname={"hidden"} desc={val.desc}/>
                            </div>
                        )
                    }
            </section>
        );
    }
}

Knowledge.propTypes = {
    technology: PropTypes.arrayOf(PropTypes.object)
};

export default Knowledge;