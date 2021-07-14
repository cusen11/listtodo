import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Search(props) {

    //API : https://api.themoviedb.org/3/search/person?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${từ khóa search}&page=1&include_adult=false
    // tìm hết các thứ search ra đưa ra danh sách gióng trang post
    // tham khảo Component API
    // thẻ input onChange 
    const [data, setData] = useState()
    useEffect(() =>{ 
        const getData = async () =>{  
                // yêu cầu lên server bằng fecth
                const respond = await fetch(`https://api.themoviedb.org/3/search/person?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query={từ`);
                const responJson = await respond.json(); 
                //sử dụng respondJson 
               
                setData(responJson.results)
                
                console.log(responJson.results)
            } 
            getData()
        },[data]) 

        //saerch title
        const [keySearch, setKey] = useState()

        useEffect(() =>{ 
            const getDataTitle = async () =>{  
                    // yêu cầu lên server bằng fecth
                    const respond = await fetch(`https://api.themoviedb.org/3/search/person?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=${keySearch}&page=1&include_adult=false`);
                    const responJson = await respond.json(); 
                    //sử dụng respondJson 
                    console.log(responJson)
                    setKey(responJson)
    
                    
                } 
                getDataTitle()
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
                            <h3>title search: {value.name}</h3>
                            <img src={`https://image.tmdb.org/t/p/w300/${value.profile_path}`} alt="huyen"></img>
                    </div>
                )
            }
        </div>
    );
}

export default Search;