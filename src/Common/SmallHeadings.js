import React from "react";

function SmallHeadings(props){
    return(
        <h2 className="section-heading-sm">
            {props.heading}<span className="green-span">.</span>
        </h2>
    )
}

export default SmallHeadings;