import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'
//import ImageSlider from './ImageSlider';


const Navbar = () => {
  return (
    <div>

    <nav>
      <ul>
        <li>
          <Link to="/find-college">FIND COLLEGE</Link>
        </li>
        <li>
          <Link to="/find-school">FIND SCHOOL</Link>
        </li>
        <li>
          <Link to="/find-university">FIND UNIVERSITY</Link>
        </li>
        <li>
          <Link to="/find-university">TOP COURSE</Link>
        </li>
        <li>
          <Link to="/find-university">EXAM</Link>
        </li>
        
        <button type="submit">GET FREE COUNCELLING</button>
        <button type="submit">ADD SCHOOLS/COLLEGES</button>

        <li id='btn'>
        <button type='submit'>lOGIN</button>
       </li>
        
      </ul>
     
      
    </nav>
    <div className='sidebar'>
      <img src="https://www.pngitem.com/pimgs/m/162-1627956_hubspot-academy-logo-hd-png-download.png" alt="" id='hub' />
    <ul >
          <li>
          <Link to='/Management'>Management</Link>
          </li>
          <li>
          <Link to='/Management'>Engineering</Link>
          </li>
          <li>
          <Link to='/Pharmacy'>Pharmacy</Link>
          </li>
          <li>
          <Link to='/Management'>Design</Link>
          </li>
          <li>
          <Link to='/Management'>Medical</Link>
          </li>
          <li>
          <Link to='/Management'>Law</Link>
          </li>
        </ul>
        </div>  
      </div>
  );
};

export default Navbar;



