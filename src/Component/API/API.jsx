import React, { useEffect, useState } from 'react';

function API() {
    const [data, setData] = useState()
    const [input, setInput] = useState('hanoi')
    useEffect(() =>{ 
       const getData = async () =>{  
            // yêu cầu lên server bằng fecth
            const respond = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=9dba1071f42efe053babb0e32f04c7cc`);
            // sau khi lấy được respond thì chuyển thành json
            const responJson = await respond.json(); 
            //sử dụng respondJson
            console.log(responJson)
            setData(responJson)
        } 
        getData()
    },[input])

    const ftoc = (f)=>{
        return f/33.8
    }

    const handleChangeInput = (e) => {
        setTimeout(()=>{
            setInput(e.target.value)
        },3000)
    }
    return (
        <>
           <h2>đây là API method GET</h2>
            <input type="text" width="200px" onChange={handleChangeInput} /><br/><br/><br/><br/> 
            <h3>Khu vực: {data?.name}</h3> 
            

            <h1>Nhiệt độ {ftoc(data?.main?.temp)}</h1>
            <p>Sức gió: {data?.wind?.speed}</p>  
        </>
    );
}

export default API;