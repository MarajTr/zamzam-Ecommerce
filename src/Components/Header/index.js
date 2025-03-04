import { Link } from 'react-router-dom';
import Logo from'../../assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { FaUserAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import SearchBox from './SearchBox';
import NavBar from './Nav';


const Header = ()=>{
    return(<>
      <div className="headerWrapper">
        <div className="top-strip">
            <div className="headerContainer">
                <p className="mb-0 mt-0 text-center bg-blue">Due to new <b> opening </b> , we give you special discount on every product</p>
            </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={'/'}> <img src={Logo}  alt='logo'/> </Link>
              </div>
              {/* here i can add location i will do it form the user log in  */}
              <div className='part2 col-sm-10 d-flex align-items-center'>

              <CountryDropdown></CountryDropdown>

              <SearchBox/>
              

             <div className='part3 d-flex align-items-center ml-auto'>
              <Button className='account mr-3'><FaUserAlt /></Button>
              <div className='cartTab ml-auto d-flex align-items-center'>
                <span className='price'>৳.30,000</span>
                <div className='position-relative'>
                <Button className='account ml-2'><CiShoppingCart /></Button>
                <span className='count d-flex align-items-center justify-content-center'>1</span>
                </div>
                
              </div>
             </div>


              </div>
            </div>
          </div>
        </header>
        <NavBar/>

      </div>
    </>
    )
}
export default Header;