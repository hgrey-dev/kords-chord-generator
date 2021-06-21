import React from 'react';


const GenButton = ({type, value, str}) => {
    

    return (
        <div>
            <button type={type} value={value} >{`${str}`}</button>
        </div>
    )
}

export default GenButton;
