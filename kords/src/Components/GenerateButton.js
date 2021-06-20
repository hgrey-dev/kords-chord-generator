import React from 'react';

function handleClick(str) {
    const KeyOfG = ['G','Bm','C','D','Dm','Am','A','Em','F#m'];
    
    const randoms = KeyOfG[Math.floor(Math.random() * KeyOfG.length)];
    return (
        <>
        <div className ="chords-box">
        <div>{randoms}</div>
        </div>
        </>
        
    )
    
}
console.log()

const GenButton = () => {
    

    return (
        <div>
            <button onClick={handleClick}>GENERATE NEW PROGRESSION!</button>
        </div>
    )
}

export default GenButton;
