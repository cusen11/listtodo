import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
    const { id } = useParams()
    return (
        <div>
           <h1> bài post có id là : {id} </h1>
        </div>
    );
}

export default Post;