import React from 'react';

const Scroll = (props) => {
    return(
        <div style ={{overflowY: 'scroll', border: '2px solid silver', height:'650px'}}>
        {props.children}
        </div>
    );
};

export default Scroll;