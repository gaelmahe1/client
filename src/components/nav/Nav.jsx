
import './nav.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div class="navContainer">
        
        <div class="top">
          <p className="logo">LES FILMS DE LA BANDE</p>
          <div class="icons">
            <InstagramIcon  className="insta"/>
           <FacebookRoundedIcon />
            <p className="news">News letter</p>
          </div>
       
        </div>
        <div class="bottom">
          <ul>
            <li>LaBande</li>
            <li>Nos bandes démo</li>
            <li>Notre expertise</li>
            <li>Les articles</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
   
    </div>
  );
}

export default Nav
