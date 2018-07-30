import React from 'react';

export default class SideLi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShow:this.props.isActive
        }
    }
    render(){
        const listArr=this.props.lilist;
        let className="menuUl";
        if(!this.props.isSpread){
            className+=" setPosition";
        }
        if(this.props.isActive){
            className+=" active";
        }
        return (
            <ul className={className}>
               {
                    listArr.map((li,index)=>{
                        return  <li className='menuLi' onClick={this.props.handleClick} key={index}>{li.text}</li>
                })
                }
            </ul>
        )
    }
}