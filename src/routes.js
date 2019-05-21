import React from 'react';
import {Switch,Route} from 'react-router-dom';
import RegionChart from '../src/component/schoolchart/schoolchart'
import SchoolChart from '../src/component/schoolchart/schoolchart.js';
import GenderChart from '../src/component/genderchart/genderchart.js';
import DistrictChart from '../src/component/districtchart/districtchart';
import Welcome from '../src/component/welcome/welcome';
const Routes=()=>{
    return(
        <Switch>
            <Route path="/regionchart" component={RegionChart} />
            <Route path="/schoolchart" component={SchoolChart} />
            <Route path="/genderchart" component={GenderChart} />
            <Route path="/districtchart" component={DistrictChart} />
            <Route exact path="/" component={Welcome} />
        </Switch>
    )

}
export default Routes;