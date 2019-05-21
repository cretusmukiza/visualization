import React from 'react';
const Nav=()=>{
    return(
        <nav >
        <NavLink activeClassName="active" to="/" >Total dropout vs Region</NavLink>
        <NavLink activeClassName="active" to="/schoolchart" >Total dropout vs school</NavLink>
        <NavLink activeClassName="active" to="/genderchart" >Male/Female dropout vs school</NavLink>
        <NavLink activeClassName="active" to="/districtchart" >Total dropout in districts</NavLink>
      </nav>
    )
}
export default Nav;