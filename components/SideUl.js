import React from 'react';
import menuLi from '../public/data/siderMenu';
import SideLi from './SideLi';

export default class SideUi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: [],
            ulShow: this.props.spread || false
        }
    }
    componentWillMount() {
        const liArr = [];
        //判断有多少个列表选项，将其显隐状态保存到isShow中
        menuLi.map((li, index) => { liArr.push(false) });
        this.setState({
            isShow: liArr
        })
    }
    toggleLi = (index) => {
        const isShow = this.state.isShow;
        isShow[index] = isShow[index] ? false : true;
        this.setState({
            isShow: isShow
        })
    }
    showUl = (e) => {
        if (!this.props.spread) {
            const target = e.target;
            const index = this.getTargetIndex(target);
            this.state.isShow[index] = true;
            this.setState({
                isShow: this.state.isShow
            })
        }
    }
    hideUl = (e) => {
        if (!this.props.spread) {
            const target = e.target;
            const index = this.getTargetIndex(target);
            this.state.isShow[index] = false;
            this.setState({
                isShow: this.state.isShow
            })
        }
    }
    getTargetIndex = (target) => {
        while (target.className !== 'ulWrapper') {
            target = target.parentNode;
        }
        const index = target.getAttribute("data-index");
        return index;
    }
    componentWillReceiveProps(nextProps) {
        const ulShow = this.state.ulShow;
        const newUlShow = nextProps.spread;
        const arr = this.state.isShow;
        if (newUlShow === false) {
            arr.forEach((a, index) => {
                arr[index] = false;
            })
        }
        if (ulShow !== newUlShow) {
            this.setState({
                ulShow: nextProps.spread || false,
                isShow: arr
            })
        }
    }
    render() {
        const isShow = this.state.isShow;
        const ulShow = this.state.ulShow;
        return (
            <React.Fragment>
                {
                    menuLi.map((li, index) => {
                        return <div key={index} className='ulWrapper' data-index={index}
                                    onMouseOut={this.hideUl}
                                    onMouseOver={this.showUl} >
                            <div className={ulShow || isShow[index] ? 'menuUlContent' : 'menuUlContent hideWidth'}
                                onClick={() => this.toggleLi(index)}>
                                <img src="../public/images/tag.png" />{li.text}
                            </div>
                            <SideLi isSpread={this.props.spread} isActive={isShow[index]} lilist={li.subitems} handleClick={this.props.clickTabs}></SideLi>
                            {ulShow || isShow[index]}
                        </div>
                    })
                }
            </React.Fragment>
        )
    }
}