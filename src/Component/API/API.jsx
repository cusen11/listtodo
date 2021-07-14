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


    // lấy dữ liệu API đầy đủ  
    // link https://api.themoviedb.org/3/tv/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&fbclid=IwAR38Wwe1dWykDYauU2dVAhcWBoGqBlmax6XI3hDeVBSePHEvspSp8ywIEmM
    // fecth(url, option, data)



    // const data = { username: 'example' }; 
    // fetch('https://example.com/profile', {
    // method: 'POST', // or 'PUT'
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    // console.log('Success:', data);
    // })
    // .catch((error) => {
    // console.error('Error:', error);
    // });


    //get là tao đưa cho mày đống này miễn phí.
    //post mày đưa tao tiền tao mới đưa mày đống này.
   
    const link = 'https://api.themoviedb.org/3/tv/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&fbclid=IwAR38Wwe1dWykDYauU2dVAhcWBoGqBlmax6XI3hDeVBSePHEvspSp8ywIEmM'
    useEffect(() =>{
        const getData = () =>{
            fetch(link)
            .then(response => response.json())
            .then(data => {
              console.log('Success:', data);
            })
        }   
        getData()
    },[]) 
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