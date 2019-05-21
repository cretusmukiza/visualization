import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import {data} from '../../data.js';
import _ from 'lodash';
import { type } from 'os';
import '../chart/chart.css';
import Nav from '../nav/nav'
class DistrictChart extends Component{
    constructor(props){
        super(props);
        this.state={
             width:"180%"
        }   
    }
 
  
    render(){
        const width=window.innerWidth
        const graph=data.map((regions)=>{
            const result=_.pick(regions,['district','total_dropout']);
         
            return  result; 
        } 
        
        )
        var reducedUsers = _.reduce(graph, function (result, user) {
            
            (result[user.district] || (result[user.district] = [])).push(user);
        
      
        return result;
         }, {});   
         var finalUser=_.map(reducedUsers).map((user,index)=>{
            const key=user[0].district;            
            const sum=user.map((result)=>{
                return result.total_dropout
            })
            var regionSum=0;
            for(let i=0; i<sum.length;i++){ 
                if(isNaN(sum[i])){
                    regionSum=sum[i];
                }
                else{
                    regionSum+=Number(sum[i]);
                }

            }
            return [key,regionSum];
        } )
        var screenWidth="103%";
        var screeHeight="600px"  
        if(width<600){
         screenWidth="100%";
         screeHeight="100%"  
        }

      
        return(
            <div>
            <Nav />  
            <div className="welcome" >  
            <div className="welcome-menu">
            <div className={"my-pretty-chart-container"}>         
               
            <Chart
                width={screenWidth}
                height={screeHeight}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                 data={
                        finalUser
                }
                options={{
                title: `Dropout in  districts of ${this.state.region} region`,
                pieHole:0.3,
                is3D:false
                 }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    
            </div>   
          </div>
            </div>
           
       
        )
        
     
    }
}
export default DistrictChart;