import React from 'react';
import ReactDOM from 'react-dom';
import SideUl from './SideUl';
import ContentTitle from './ContentTitle';
import ContentArea from './ContentArea';

export default class SideNav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spread:true,
            ulShow:true,
            liList:[]
        }
    }
    sideSpread=()=>{
        const spread=this.state.spread?false:true;
        this.setState({
            spread:spread
        })
    }
    addTab=(e)=>{
        const target=e.target;
        const state=this.state.liList;
        if(state.indexOf(target.innerText)<0){
        state.push(target.innerText);
        this.setState({
            liList:state
        })
    }
    }
    closeTab=(e)=>{
        const index=this.state.liList.indexOf(e.target.innerText);
        this.state.liList.splice(index,1);
        this.setState({
            liList:this.state.liList
        })
    }
    render(){
        const state=this.state;
        const styleattr=state.spread?'250px':'50px';
        return(
            <React.Fragment>
            <div className={state.spread?'sideMenu':'sideMenu hideWidth'}>
               <div className={state.spread?'contractBtn':'contractBtn hideWidth'}>
                    <img src={state.spread?'../public/images/doubleleft.png':'../public/images/doubleright.png'} onClick={this.sideSpread}/>
               </div>
               <SideUl ulShow={state.ulShow}  spread={state.spread} clickTabs={this.addTab}/>
            </div>
            <div className='content' style={{marginLeft:styleattr}}>
                <ContentTitle showTabs={this.state.liList} closeTab={this.closeTab}/>
                <ContentArea/>
            </div>
            </React.Fragment>
        )
    }
}