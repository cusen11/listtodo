import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailTV() {
    const { idTV } = useParams()
    const [data,setData] = useState() 

    useEffect(() =>{ 
    const getData = async () =>{  
            // yêu cầu lên server bằng fecth
            const respond = await fetch(`https://api.themoviedb.org/3/tv/${idTV}?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US`);
            const responJson = await respond.json(); 
            //sử dụng respondJson 
           
            setData(responJson)
            console.log(responJson)
            
        } 
        getData()
    },[idTV]) 


    console.log(data)
    return (
        <div>
            <h1> bài chi tiết TV có id là: {idTV} </h1>  
            {
                data? <div>
                        <div>title:{data.name}</div>
                        <img src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} alt="" /> 
                        <div>destription :{data.overview}</div>
                    </div>: "loading nè"
            }
        </div>
    );
}

export default DetailTV;