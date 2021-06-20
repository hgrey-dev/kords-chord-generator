import React from 'react';

const RandomChord = () => {
    
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


const RandomChordsInG = () => {
    return (
        <>
        <div className="chord-group">
            <RandomChord/>
            <RandomChord/>
            <RandomChord/>
            <RandomChord/>
        </div>
        </>
    )
}

export default RandomChordsInG;