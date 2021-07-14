import React from 'react';
import { Link } from 'react-router-dom'
function Nav(props) {
    return (
        <div>
            <ul>
                <li><Link to='/'> Use State</Link></li>
                <li><Link to='/useeffects'> Use Effects</Link></li> 
                <li><Link to='/listpost'> List Post</Link></li> 
                <li><Link to='/obj'> OBJ </Link></li>
                <li><Link to='/api'> API </Link></li> 
                <li><Link to='/apihuyen'> API Huyen </Link></li> 
                <li><Link to='/listtv'> list TV</Link></li>
                <li><Link to='/search'> Search</Link></li>
            </ul>
        </div>
    );
}

export default Nav;