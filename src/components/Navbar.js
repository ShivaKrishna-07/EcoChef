import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import logo from './images/4.png' 

function Navbar() {
  return (
    <>
      <Menu borderless fixed="top"  >
        <Menu.Item>
          <img src={logo} alt="" style={{height:100, width:100, borderRadius:'50%'}} />
        </Menu.Item>

        <Menu.Item style={{ fontWeight: "bolder", fontSize:30 }} name="Eco Chef"/>
        <Menu.Item style={{ fontWeight: "bolder" }} name="Home" as={Link} to='/' />
        <Menu.Item style={{ fontWeight: "bolder" }} name="Recipe" as={Link} to='/recipes' />
      </Menu>
    </>
  );
}

export default Navbar;
