import header from "./img/likelion.png";
import React from 'react';
import './css/Header.css';

function Header(){
    return(
        <div>
            <div className="logo"> 
                <img className="logoimg" src={header} alt="logo"/>            
            </div>
        </div>

    );

};

export default Header; //다른 js파일에서 불러올 수 있도록 내보냄