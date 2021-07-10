import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Post() {
    //useParams để lấy params truyền từ đường dẫn /post/:id 
    // cách dùng template string `/post/${data}`
    const { id } = useParams() 
    // https://api.themoviedb.org/3/movie/{id của phim}?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US
    // https://api.themoviedb.org/3/movie/19404?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US
    // dùng cái API trên để lấy thông tin của sản mỗi bộ phim và show ra
    // title, tổng bình chọn, thể loại phim, hình ảnh, destription

    const [data, setData] = useState()
    // const history = useHistory()
    useEffect(() =>{ 
       const getData = async () =>{  
            // yêu cầu lên server bằng fecth
            const respond = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US`);
            const responJson = await respond.json(); 
            //sử dụng respondJson 
            console.log(responJson)
            setData(responJson)
            
            
        } 
        getData()
    },[id]) 
    return (
        <div>
            <h1> bài post có id là huyen: {id} </h1>  
            {/* //toán tử 3 ngôi */

                data? <div>
                        <div>title:{data.title}</div>
                        <div>tong binh chon :{data.vote_count}</div>
                        <div>the loai :{data.tagline}</div>
                        <img src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} alt="" /> 
                        <div>destription :{data.overview}</div>
                    </div> : 'loading...'
            } 
        </div>
    ); 
}

export default Post;