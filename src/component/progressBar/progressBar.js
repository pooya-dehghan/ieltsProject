import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
const Parent = styled.div`
    width : 200px;
    height : 7px;
    border-radius:10px;
    background-color:#95afc0;
    position:fixed;
    bottom:30px;
    left:20px;
    margin:10px;

`
const Tracker = styled.div`
    width : ${props => props.percantage}%;
    height : 100%;
    background-color:#535c68;
    transition:width 400ms ease-in-out;
    border-radius:8px;

`

class progressBar extends Component{
    clamp = (max,min,value) => {
        return Math.min(Math.max(min,value),max)
    }
    render(){
        return(
                <Parent>
                    <Tracker percantage={this.clamp(this.props.percantage,100,0)}>
                    </Tracker>
                </Parent>
            )
    }
}

const mapStateToProps = state => {
    return{
        percantage: state.percentage.percantage,
    }
}

export default connect(mapStateToProps,null)(progressBar)