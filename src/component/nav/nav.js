import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie,faUserCircle,faUniversity,faChartBar,faChartLine,faChartArea} from '@fortawesome/free-solid-svg-icons'
library.add(faChartPie,faUserCircle,faUniversity,faChartBar,faChartBar,faChartLine,faChartArea)
class  Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}

        >
        <div className="upper-nav">
            <NavLink to=""><FontAwesomeIcon icon="chart-pie" />Visualization</NavLink>
        </div>
        <div className="lower-nav">
            <ul>
                <li><NavLink activeClassName="active" to="/welcome"><FontAwesomeIcon icon="university" />Home</NavLink></li>
                <li><NavLink activeClassName="active" to="/regionchart"><FontAwesomeIcon icon="chart-bar" />Regionchart</NavLink></li>
                <li><NavLink activeClassName="active" to="/districtchart"><FontAwesomeIcon icon="chart-line" />Districtchart</NavLink></li>
                <li><NavLink activeClassName="active" to="/schoolchart"><FontAwesomeIcon icon="chart-area" />Schoolchart</NavLink></li>
                <li><NavLink activeClassName="active" to="/genderchart"><FontAwesomeIcon icon="chart-pie" />Genderchart</NavLink></li>
            </ul>
        </div>
        </div>
        )
    }
    
}
export default Nav;
