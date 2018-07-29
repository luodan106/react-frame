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
        

        return (
            <ul className={this.props.isActive?'menuUl active':'menuUl'}>
               {
                    listArr.map((li,index)=>{
                        return  <li className='menuLi' key={index}>{li.text}</li>
                })
                }
            </ul>
        )
    }
}