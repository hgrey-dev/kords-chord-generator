import React, { useState } from 'react';
import RandomChordsInG from './KeyOfG';


const GenButton = ({type, value, label}) => {
    
    const [chords, setChords] = useState(<RandomChordsInG/>)

    return (
        <div>
            <input onClick={() => setChords(<RandomChordsInG/>)} className="gen-button" label={label} type={type} value={value} />
            {chords}
        </div>
    )
}

export default GenButton;
