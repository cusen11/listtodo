import React, { useState } from 'react';

function LernState() { 
    // trường hợp Boolean
    const [hide, setHide] = useState(false)
    const handleClickHide = () => { 
        setHide(!hide)
    }
    // trường hợp text
    const [text, setText] = useState('Xin chào')
    return (
        <div>
            <h1 hidden={hide}>Learn useState</h1>
            <button onClick={handleClickHide}>Click Hide</button>
        
            <h3
                onMouseEnter={() => setText('Hello')}
                onMouseLeave={() => setText('Xin Chào')}
            >{text}</h3> 
        </div>
    );
}

export default LernState;