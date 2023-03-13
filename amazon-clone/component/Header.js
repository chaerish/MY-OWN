import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.css';
export default function Header() {
  return (
    <div className='header'>
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            <div className='header_search'>
                <input className='header_searchinput'type='text'/>
              {/* <SearchIcon className="header_searchIcon"/> */}
            </div>
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLine1'>안녕하세요</span>
                <span className='header_optionLine2'>로그인하기</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLine1'>돌아가기</span>
                <span className='header_optionLine2'>주문내역</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLine1'>반가워요</span>
                <span className='header_optionLine2'>쇼핑</span>
            </div>
            <div className="header_shoppingBag">
                
                <span className='count'>0</span>
            </div>

                
        </div>
    </div>


  )
}
