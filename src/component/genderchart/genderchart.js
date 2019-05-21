import React,{Component} from 'react';
import {Chart} from 'react-google-charts';
import {data} from '../../data.js';
import  '../chart/chart.css';
import _ from 'lodash';
import Nav from '../nav/nav';
import { type } from 'os';
class GenderChart extends Component{
    constructor(props){
        super(props);
        this.state={
            region:"",
            data:[],
            width:"180%"
        }
        this.handleRegion=this.handleRegion.bind(this);
        this.filterRegion=this.filterRegion.bind(this);
    }
    handleRegion(event){
        if(event.target.value!=="REGION"){
            this.setState({region:event.target.value})
        }
        this.filterRegion(event.target.value)
    }
    filterRegion(index){
        const selectedRegion=data.filter((region)=>(
            region.region===index || region.region==="REGION"
        ))
    
        const graph=selectedRegion.map((regions)=>{
            const result=_.pick(regions,['school','dropout_male',"dropout_female"]);
         
            return  result; 
        } 
        
        )    
        
        var finalUser=graph.map((user,index)=>{
            var dropout_male=null;
            var dropout_female=null;
            if(isNaN(user.dropout_female) || isNaN(user.dropout_male)){
                dropout_male=user.dropout_male;
                dropout_female=user.dropout_female;
            }
            else{
                dropout_male=parseInt(user.dropout_male);
                dropout_female=parseInt(user.dropout_female);
            }            
            const key=user.school;
            return [key,dropout_male,dropout_female];
        } ) 
        const width=(finalUser.length>15)?"180%":"100%";
        this.setState({
            data:finalUser,
            width:width
        });
    }
    render(){
        const regions=data.map((region)=>{
        
            return region.region
        })
        const linedata=_.sortedUniq(regions);    
        console.log(this.state.width);
        const width=window.innerWidth
        var screenWidth="103%";
        var screeHeight="405px"  
        if(width<600){
         screenWidth="100%";
         screeHeight="400px"  
        }
        if(this.state.data.length>0){
        return(
            <div>
            <Nav />  
            <div className="welcome" >  
            <div className="welcome-menu">
            <div className={"my-pretty-chart-container"}>
            <select name="region" onChange={this.handleRegion}>
               {
                   linedata.map((line,index)=>(
                       <option key={index}>{line}</option>
                   ))
               }
            </select>
            <div className={"my-pretty-chart-container"}>
                <Chart
                    width={screenWidth}
                     height={screeHeight}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={this.state.data}
                    options={{  
                     // Material design options
                    chart: {
                     title: ` school dropout vs gender(${this.state.region} REGION)`
     
                     },
            }}
            // For tests
            rootProps={{ 'data-testid': '1' }}
            />
     
            </div>
        </div>
            </div>   
          </div>
          </div>
        
        )
        }
        else{
            return(
                <div>
                <Nav />  
                <div className="welcome" >  
                <div className="welcome-menu">
                <div>
                <select name="region" onChange={this.handleRegion}>
               {
                   linedata.map((line,index)=>(
                       <option key={index}>{line}</option>
                   ))
               }
            </select>
            <p>Please select the region</p>
            </div>
                </div>   
              </div>
              </div>
               

            )
        }
    }
}
export default GenderChart;