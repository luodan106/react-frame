import React from 'react';
import menuLi from '../public/data/siderMenu';
import SideLi from './SideLi';

export default class SideUi extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isShow:[],
        }
    }
    componentWillMount(){
        const liArr=[];
        menuLi.map((li,index)=>{liArr.push(false)});
        this.setState({
            isShow:liArr
        })
    }
    toggleUl=(index)=>{
        const isShow=this.state.isShow;
        isShow[index]=isShow[index]?false:true;
        this.setState({
            isShow:isShow
        })
    }
    render() {
        const isShow=this.state.isShow;
        return (
            <React.Fragment>
                {
                    menuLi.map((li, index) => {
                        return <div key={index}><div className='menuUlContent' onClick={()=>this.toggleUl(index)}><img src="../public/images/tag.png"/>{li.text}</div><SideLi isActive={isShow[index]} lilist={li.subitems}></SideLi></div>
                    })
                }
            </React.Fragment>
        )
    }
}