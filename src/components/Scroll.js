import React from "react";

const Scroll=(props)=>{
    return (
        // sobrepasar es overflow (los 500px), cuando pasa,scrollear... etc etc 
        <div style={{overflowY:'scroll', border: '5px solid black', height: '500px' }}> 
            {props.children}
        </div>
    )
};
export default Scroll;