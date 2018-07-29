import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';

export default class Index extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            //可不增加额外节点
            <React.Fragment>
                {/*顶部导航条*/}
                <TopNav/>
                {/*侧面导航条*/}
                <SideNav/>
            </React.Fragment>
        )
    }
}