import React from 'react';
import {Link} from 'react-router-dom';
import './css/Main.css';
function Click() {
    return (
        <div className='clickb'>
            <Link to="/form">지원하기</Link>
        </div>
    );
}

export default Click;
     