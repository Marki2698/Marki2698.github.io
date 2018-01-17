import React from "react";
import PropTypes from "prop-types";
import Image from "../components/image.jsx";
import Description from "../components/description.jsx";

//technology will be array of objects [{src: "", alt: "", desc: ""}]

class Knowledge extends React.Component {
    constructor(props) {
        this.technology = this.props.technology;
        this.index = 1;
        super(props);
    }


    render() {
        return(
            <section className="knowledge">
                <ul>
                    {
                        this.technology.map((val, i) => {
                            //this.technology
                        })
                    }
                </ul>
            </section>
        );
    }
}

Knowledge.propTypes = {
    technology: PropTypes.arrayOf(object)
};

export default Knowledge;