import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

function ListTV() {
    const [data,setData] = useState()
    const  history = useHistory()
    useEffect(()=>{
       const getData = async () =>{
        //yêu cầu lên server bằng fetch
        const respond = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&fbclid=IwAR38Wwe1dWykDYauU2dVAhcWBoGqBlmax6XI3hDeVBSePHEvspSp8ywIEmM`)
        //chuyển đổi về dạng json
        console.log(respond)
        const respondjson = await respond.json();
        setData(respondjson.results);
       }
       getData();
       
   },[data])

   console.log(data)
   const hanldClickTV = (idTV)=>{
       history.push(`/TV/${idTV}`)
   }
   
    return (
        <>
        <h2>đây là API method GET Huyen</h2> 
       {data?.map((value, index) => 
                <div key={index}> 
                    <h3 onClick = {()=> hanldClickTV(value.id)}>title:{value.name}</h3>
                    <img src={`https://image.tmdb.org/t/p/w300/${value.poster_path}`} alt="" /> 
                    <div>bình luận: {value.overview}</div> 
                    <p>đất nước: {value.origin_country[0]}</p>  
                </div>
            )
        }

        
    </>
    );
};

export default ListTV;