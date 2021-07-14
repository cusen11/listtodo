import React from 'react';
import { useState, useEffect } from 'react'; 
import { useHistory } from 'react-router-dom';


function Search(props) { 
    const history = useHistory()

    const [data, setData] = useState()
    const [keySearch, setKey] = useState()
    useEffect(() =>{ 
        const getData = async () =>{  
                // yêu cầu lên server bằng fecth
                const respond = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${keySearch}`);
                const responJson = await respond.json(); 
                //sử dụng respondJson  
                console.log(responJson)
                setData(responJson.results) 
            } 
            getData()
        },[keySearch])  
    
    const handleChange = (e)=>{
        setTimeout(()=>{
            setKey(e.target.value)
        },3000)
    } 
    return (
        <div>
            {
                 <form action="">
                 <input type="text" onChange={handleChange}/>
                 <button type="submi">Submit</button>
                </form>
            }
            {
                
                data?.map((value,index)=>
                    <div key={index}>
                            
                            <h3 >id:{value.id}</h3>
                            <h3 onClick={() => history.push(`/TV/${value.id}`)}>title search: {value.name}</h3>
                            {value.backdrop_path ? <img src={`https://image.tmdb.org/t/p/w300/${value.backdrop_path}`} alt={value.name}/> : ''}
                            
                    </div>
                )
            }
        </div>
    );
}

export default Search;