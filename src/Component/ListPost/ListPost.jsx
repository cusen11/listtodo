import React from 'react';
import { useHistory } from 'react-router-dom';

function ListPost(props) {
    const history = useHistory()
    //... là copy
    // [...Array(20)] = [1,2,3,4,5,6,7,8,9,10,...,20]
    //map là lặp 
    const goDetail = (data) =>{
        history.push(`/post/${data}`)
    }

    const obj =[
        {
            id: 1,
            name: 'sen'
        },
        {
            id: 2,
            name: 'huyen'
        },
        {
            id: 3,
            name: 'tuan'
        },
        {
            id: 4,
            name: 'shimano'
        },
        {
            id: 5,
            name: 'u40'
        } 
        
    ]
    return (
        <div>
            {
                obj.map((data)=>
                    <h1 key={data.id} onClick={()=> goDetail(data.id)}>{data.name}</h1>
                )
            }
        </div>
    );
}

export default ListPost;