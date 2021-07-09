import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
    //useParams để lấy params truyền từ đường dẫn /post/:id 
    // cách dùng template string `/post/${data}`
    const { id } = useParams() 
    // https://api.themoviedb.org/3/movie/{id của phim}?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US
    // https://api.themoviedb.org/3/movie/19404?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US
    // dùng cái API trên để lấy thông tin của sản mỗi bộ phim và show ra
    // title, tổng bình chọn, thể loại phim, hình ảnh, destription
    return (
        <div>
           <h1> bài post có id là : {id} </h1>
        </div>
    );
}

export default Post;