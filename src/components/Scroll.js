import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '80vh', scrollbarWidth: 'none'}}>
            {props.children};
        </div>
    )
}

export default Scroll;