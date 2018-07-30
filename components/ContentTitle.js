import React from 'react';

export default class ContentTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.showTabs);
        return (
            <ul className='contentTitle'>
                {
                    this.props.showTabs&&this.props.showTabs.map((l, index) => {
                      return <li className='funTitle'>
                            <i></i>
                            <span>{l}</span>
                            <a href='#' className='shutdown' onClick={this.props.closeTab}>
                                <i></i>
                            </a>
                        </li>
                    })
                }
            </ul>
        )
    }
}