import { MenuOutlined } from "@ant-design/icons";
import {Menu} from "antd";
import {Drawer} from "antd";
import * as React from 'react';


function Header() {
  
  const [openMenu,setOpenMenu] = React.useState(false)
  return (
   <div>
    
    <div 
    style={{backgroundColor:"#fbfbfb",
    height:"30px",
    paddingLeft:"15px",
    paddingTop:"15px"}}
    className="menuIcon"
    >
      <MenuOutlined style={{color:"#0000FF",fontSize:"25px"}} onClick={()=>{
        setOpenMenu(true);
      }}/>
    </div>
    <span className="headerMenu">
   <AppMenu/>
   </span>
   <Drawer 
   placement="left"
   open={openMenu}
   onClose={() => {
    setOpenMenu(false);
   }}
    closable={false}
     bodyStyle={{backgroundColor:"#fbfbfb"}}>
   <AppMenu isInline/>
   </Drawer>
   </div>
  );
}

function AppMenu({isInline=false}){
  return(
    
    <Menu 
    style={{backgroundColor:"#fbfbfb",color:"232323",fontSize:"14px",border:"none"}}
    mode={isInline?"inline":"horizontal"}
    
    items={[
      {
        label:"Home",
        key:"home",
      },
      {
        label:"Courses ",
        key:"courses",
      },
      {
        label:"Gallary",
        key:"gallary",
      },
      {
        label:"About Us",
        key:"about us",
      },
      {
        label:"Contact Us",
        key:"contactus",
      },
      {
        label:"Certification",
        key:"certification",
      },
    ]}>
      
    </Menu>
  )
}

export default Header