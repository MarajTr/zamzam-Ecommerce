import React from "react";
import { FaAngleDown } from "react-icons/fa6";

import Button from '@mui/material/Button';
import { Dialog } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from '@mui/material/Slide';
import Location from "./location";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDropdown=()=>{
  const[isOpenModel, setisOpenModel, getLocation]=useState(false)
return(
    <> 
                <Button className='countryDrop' onClick={()=>setisOpenModel(true)}>
                     { <div className='info d-flex flex-column'>
                        <span className="label">Find Us...</span>
                        
                        {/* <Location/> */}
                      </div>
                     }
                      <span className="ml-auto"><FaAngleDown/>  </span>
                </Button>


                <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)}  className="locationmodel"  TransitionComponent={Transition}> 
                  
                    <Location/>
                    <Button className="close_" onClick={()=>setisOpenModel(false)}><IoMdClose/></Button>

                </Dialog >
    </>
)
}
export default CountryDropdown;