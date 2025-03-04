// import Button from '@mui/material/Button';
// import { IoIosMenu } from "react-icons/io";
// import { FaAngleDown } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// const Navigation=()=>{
//   const [isOpenSidebarVal , setIsOpenSidebarVal] = useState(false);
//     return(
        
//          <nav>
//            <div className='container'>
//              <div className='row'>
//                <div className='col-sm-2  navpart1'>
//                  <div className='catWrapper'>
//                   <Button className='allCatTap align-items-center' onClick={()=>setIsOpenSidebarVal(!isOpenSidebarVal)}>
//                     <span className='icon1 mr-2'><IoIosMenu/></span>
//                     <span className='text'>ALL CATEGORIES</span>
//                     <span className='icon2 ml-2'><FaAngleDown/></span>
//                     </Button>
//                     <div className={`sidebarNav ${isOpenSidebarVal===true ? 'open' : ''}
//                     `}>

//                        <ul>
//                         <li><Link to="/">  <Button> Men</Button></Link></li>
//                         <li><Link to="/">  <Button> Women</Button></Link></li>
//                         <li><Link to="/">  <Button> Beauty</Button></Link></li>
//                         <li><Link to="/">  <Button> Kids</Button></Link></li>
//                         <li><Link to="/">  <Button> Watch</Button></Link></li>
//                        </ul>
//                     </div>
//                 </div>
//              </div>

//               <div className='col-sm-10 navpart2 d-flex align-items-center'>
//                 <ul className='list list-inline  ml-auto'>
//                   <li className='list-inline-item'> 
//                   <Link to="/">  <Button> home</Button></Link>
//                   </li>
//                   <li className='list-inline-item'>
//                    <Link to="/">  <Button> Ac</Button></Link>
//                     <div className='submenu'>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     </div>
//                   </li>
//                   <li className='list-inline-item'>
//                    <Link to="/">  <Button> Ac</Button></Link>
//                     <div className='submenu'>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     </div>
//                   </li>
//                   <li className='list-inline-item'>
//                    <Link to="/">  <Button> Ac</Button></Link>
//                     <div className='submenu'>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     </div>
//                   </li>
//                   <li className='list-inline-item'>
//                    <Link to="/">  <Button> Ac</Button></Link>
//                     <div className='submenu'>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     </div>
//                   </li>
//                   <li className='list-inline-item'>
//                    <Link to="/">  <Button> Ac</Button></Link>
//                     <div className='submenu'>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     <Link to="/">  <Button> Ac</Button></Link>
//                     </div>
//                   </li>
                 
//                   <li className='list-inline-item'> <Link to="/"><Button> Contract us</Button></Link></li>
                  
//                 </ul>
//               </div>
//             </div>
//           </div>

//         </nav>
       
//     )
// }

// export default Navigation;
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prevState => !prevState);
  }, []);

  const menuItems = ["Men", "Women", "Beauty", "Kids", "Watch"];
  const subMenuItems = ["Item 1", "Item 2", "Item 3"];

  return (
    <nav>
      <div className='container'>
        <div className='row'>

          {/* Sidebar Navigation */}
          <div className='col-sm-2 navpart1'>
            <div className='catWrapper'>
              <Button className='allCatTap align-items-center' onClick={toggleSidebar}>
                <span className='icon1 mr-2'><IoIosMenu /></span>
                <span className='text'>ALL CATEGORIES</span>
                <span className='icon2 ml-2'><FaAngleDown /></span>
              </Button>
              <div className={`sidebarNav ${isSidebarOpen ? 'open' : ''}`}>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to="/"><Button>{item}</Button></Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className='col-sm-10 navpart2 d-flex align-items-center'>
            <ul className='list list-inline ml-auto'>
              <li className='list-inline-item'>
                <Link to="/"><Button>Home</Button></Link>
              </li>

              {/* Dynamic Submenu Items */}
              {Array(5).fill(null).map((_, index) => (
                <li className='list-inline-item' key={index}>
                  <Link to="/"><Button>Menu {index + 1}</Button></Link>
                  <div className='submenu'>
                    {subMenuItems.map((subItem, subIndex) => (
                      <Link to="/" key={subIndex}><Button>{subItem}</Button></Link>
                    ))}
                  </div>
                </li>
              ))}

              <li className='list-inline-item'>
                <Link to="/"><Button>Contact Us</Button></Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navigation;
