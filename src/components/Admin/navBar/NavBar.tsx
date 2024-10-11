import React from 'react'
import SearchBar from './SearchBar';
import Profile from './Profile';
import { Header1 } from '@/components/Text';

function NavBar() {
  return (
    <div className=' bg-bg_gray flex w-full fixed '>
      <div className="container1 py-[12px]  w-full text-p_black">
        <div className=" flex justify-between  items-center">
          {" "}
          <img src="/images/logodemo.svg" alt="" />
          <div className=" flex gap-[24px]">
            <div>
              <SearchBar />
            </div>
            <div>
              <Profile />
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default NavBar
