import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function LearnuseEffects() {
    const history = useHistory()
    //useEffects là hàm dùng để chạy 1 đoạn js dựa trên dependence
    const [text, setText] = useState('red') 
    useEffect(()=>{ 
        console.log('text')
    },[text]) 

    const goHomePage = () =>{
        history.push('/')
    }

    return (
        <div>
            <h1 style={{color:text}}>Learn useEffects</h1>
            <button onClick={() => setText('yellow')}>Click</button>
            <button onClick={goHomePage}>Home Page</button>
        </div>
    );
}

export default LearnuseEffects;