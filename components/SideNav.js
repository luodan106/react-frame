import React from 'react';
import ReactDOM from 'react-dom';
import SideUl from './SideUl';

export default class SideNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spread:true,
            ulShow:true
        }
    }
    sideSpread=()=>{
        const spread=this.state.spread?false:true;
        const ulShow=this.state.ulShow?false:true;
        this.setState({
            spread:spread
        })
    }
    render(){
        return(
            <div className='sideMenu'>
               <div className='contractBtn'>
                    <img src={this.state.spread?'../public/images/doubleleft.png':'../public/images/doubleright.png'} onClick={this.sideSpread}/>
               </div>
               <SideUl isShow={this.state.ulShow}/>
            </div>
        )
    }
}