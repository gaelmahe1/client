
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Nav = () => {
  return (
    <div>
      <div class="navContainer">
        
        <div class="top">
          <p>Les films de la bande</p>
          <div class="icons">
            <InstagramIcon />
           <FacebookRoundedIcon />
            <p>News letter</p>
          </div>
       
        </div>
        <div class="bottom"></div>
      </div>
   
    </div>
  );
}

export default Nav
