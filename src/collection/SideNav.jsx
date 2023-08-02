import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Data from "./Data";

const Divider = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  
`;

const MainDiv = styled.div`
  font-size: 15px;
  width: 30vw;
  color: grey;
  margin: 10px;
  padding:5px;
`;

const Collection = styled.p`
font-size:15px;
padding:5px;`

const List = styled.ul`
  color: white;
 
  
`;
const ListItem = styled.li`
  list-style-type: none;
  padding: 5px;
  font-size: 17px;
 
  
`;


const SideNav = () => {
  return (
    <>
      <Divider>
        <MainDiv>
          <Collection>Collections</Collection>
          
          <List>
            <ListItem>
              <NavLink to="/search"
              exact
              activeClassName="active"
              className="navbar-link">All</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/search/bags" 
              activeClassName="active"
              className="navbar-link">
                Bags
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/search/electronics"
              activeClassName="active"
              className="navbar-link">
                Electronics
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/search/jackets"
              activeClassName="active"
              className="navbar-link">
                Jackets
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/search/kids"
              activeClassName="active"
              className="navbar-link">
                Kids
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/search/shirts"
              activeClassName="active"
              className="navbar-link">
                Shirts
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/search/headware"
              activeClassName="active"
              className="navbar-link">
                Headware
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/search/hoodie"
              activeClassName="active"
              className="navbar-link">
                Hoodie
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink  to="/search/footware"
              activeClassName="active"
              className="navbar-link">
                Footware
              </NavLink>
            </ListItem>
          </List>
        </MainDiv>
        <Outlet />
      </Divider>
    </>
  );
};

export default SideNav;
