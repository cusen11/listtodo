import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



function SearchDetail() {
    const {idSearch} = useParams()
    const [data, setData] = useState()
    const [keySearch, setKey] = useState()

    useEffect(() =>{ 
        const getData = async () =>{  
                // yêu cầu lên server bằng fecth
                const respond = await fetch(`https://api.themoviedb.org/3/search/person?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${keySearch}&page=1&include_adult=false`);
                const responJson = await respond.json(); 
                //sử dụng respondJson 
                console.log(responJson)
                setData(responJson)

                
            } 
            getData()
        },[keySearch]) 
    
    // const clickSumbit = ()=>{
    //     setKey(keySearch)
    // }
    
    return (
        <div>
            <h2>đây la trang có id:{idSearch}</h2>
           
            
        </div>
    );
}

export default SearchDetail;