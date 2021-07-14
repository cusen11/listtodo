import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function APIHuyen() {
    const [data, setData] = useState()
    const history = useHistory()
    useEffect(() =>{ 
       const getData = async () =>{  
            // yêu cầu lên server bằng fecth
            const respond = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&fbclid=IwAR2q_xIqYeSrWOfWt-8XxR7wTrE37l2OBmhb9jusguRO8qgDMGvIZHtRDYk`);
            // sau khi lấy được respond thì chuyển thành json
            const responJson = await respond.json(); 
            //sử dụng respondJson 
            setData(responJson.results)
        } 
        getData()
    },[data]) 

    const handleClickPost = (id) =>{
        history.push(`/post/${id}`)
    }
    return (
        <>
            <h2>đây là API method GET Huyen</h2> 
           {data?.map((value, index) => 
                    <div key={index}> 
                       <h3 style={{cursor:'pointer'}} onClick={()=>handleClickPost(value.id)}>Title: {value.original_title}</h3>
                        <img src={`https://image.tmdb.org/t/p/w300${value.backdrop_path}`} alt="" /> 
                        <h3>Giải thích: {value.overview}</h3> 
                        <p>Ngày xuất bản: {value.release_date}</p>  
                    </div>
                )
            }

            
        </>
    );
}

export default APIHuyen;





