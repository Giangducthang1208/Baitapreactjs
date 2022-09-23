import React from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {

  const {userLogin} = useSelector(state => state.useReducer);


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <div>
            <img src="" alt="" />
          </div>
          <nav>
            <a href="#" className='nav-link'>Thông tin cá nhân</a>
            <a href="#" className='nav-link'>Lịch sử đơn hàng</a>
          </nav>
        </div>
      </div>
    </div>
  )
}
