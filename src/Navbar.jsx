import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Nav = styled.div`
  position: relative;
  bottom: 0px;
  left: 70px;
  background-color: rgb(23, 23, 23);
  width: 90vw;
  height: 300px;
  border-top: 1px solid grey;
  color: white;
  display: flex;
`;

const Div = styled.div`
  display: flex;
  margin-left: 20px;
  margin: 48px;
  color:grey !important;
`;

const Name = styled.h3`
  margin-left: 10px;
  margin-top: 20px;
  color:grey !important;
  cursor: pointer;
  &:hover {
    color: #efe3e3 !important;
  }
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  background-color:blue;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;
const MenuList = styled.ul`
  margin: 5px;
  padding: 10px;
`;

const MenuListItem = styled.li`
  color: white !important;
  list-style-type: none;
  padding: 10px;
  &:hover {
    text-decoration: underline;
    text-underline-position:under;
  }
  
`;

const Copy = styled.p`
  font-size: 16px;
  
  width: 100%;
  border-top: 1px solid grey;
  heigth: 110px;
  padding-top: 30px;
  padding-left: 90px;
  padding-bottom:10px
  overflow-y: hidden;
`;

const Navbar = () => {
  return (
    <>
      <Outlet />
      <Nav>
        <Div>
          <Image src="photos/logo.webp" alt="logo"></Image>
          <Name>
            <NavLink to="home" className="name">THE MODERN STORE</NavLink>
          </Name>
        </Div>
        <Menu>
          <MenuList>
            <MenuListItem>
              <NavLink to="/" 
              exact activeClassName="active"
              className="navbar-link">
                Home
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink to="/about" 
              activeClassName="active"
              className="navbar-link">
                About
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink
                to="/terms&conditions"
                className="navbar-link"
                activeClassName="active"
              >
                Terms & Conditions
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink to="/FAQ" className="navbar-link"
              activeClassName="active">
                FAQ
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink
                to="/shipping"
                className="navbar-link"
                activeClassName="active"
              >
                Shipping & Return Poicy
              </NavLink>
            </MenuListItem>
            <MenuListItem>
              <NavLink
                to="/privacy&policy"
                className="navbar-link"
                activeClassName="active"
              >
                Privacy Policy
              </NavLink>
            </MenuListItem>
          </MenuList>
        </Menu>
      </Nav>
      <Copy>&copy; CopyRight 2023 , Inc.All Rights Reserved | Designed in India</Copy>
    </>
  );
};
export default Navbar;
