import React, { useState } from 'react';
import "./style.module.css";

const FeaturedItem = () => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        margin: "15px 3% 0px 3%",
        padding: "10px 20px",
        color: isHovered ? "white" : "red", // Update color property based on hover state
        backgroundColor: isHovered ? "red" : "white", // Update backgroundColor property based on hover state
        border: "none",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
    };

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                {/* <img className="img-fluid" alt="100%x280" src="https://source.unsplash.com/random?cars&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" /> */}

                <img className="img-fluid" alt="100%x280" src="https://source.unsplash.com/random?cars&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }} />
                <div className="card-body">
                    <h4 className="card-title">Toyota Corolla</h4>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button
                        style={buttonStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedItem;
