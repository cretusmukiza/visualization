import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import {data} from '../../data.js';
import './chart.css';
import _ from 'lodash';
import { type } from 'os';
const filter=()=>{
    let newArray=_.omit(data,['district','ward','school','dropout_male','dropout_female']);
    return newArray;
}
class RegionChart extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const graph=data.map((regions)=>{
            const result=_.omit(regions,['district','ward','school','dropout_male','dropout_female']);
         
            return  result; 
        } 
        
        )
        var reducedUsers = _.reduce(graph, function (result, user) {
            
                (result[user.region] || (result[user.region] = [])).push(user);
            
          
            return result;
        }, {});
        
        var finalUser=_.map(reducedUsers).map((user,index)=>{
            const regionObject={};
            const key=user[0].region;            
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
        const width=window.innerWidth
        var screenWidth="103%";
        var screeHeight="400px"  
        if(width<600){
         screenWidth="100%";
         screeHeight="400px"  
        }

      
       
        console.log(finalUser);
        return(
            <div>
            <Nav />  
            <div className="welcome" >  
            <div className="welcome-menu">
            <div className={"my-pretty-chart-container"} >
            <Chart
            width="103%"
            height="400px"
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={finalUser}
            options={{  
             // Material design options
            chart: {
            title: 'Total dropout vs Region',
     
            },
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
            />
             </div>
            </div>   
            </div>
            </div>
           
       
        )
    }
}
export default RegionChart;