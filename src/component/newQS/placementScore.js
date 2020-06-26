import React,{useState} from 'react'
import Slider from '../UI/sliderWithNumber/sliderwithnumber'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'
import classes from './placementScore.module.css'
import Button from '../UI/button/button'

const PlacementScore = (props) => {
    const [state, setState] = useState(0);
    const [touched, setTouced] = useState(false) 
    const [pass,setPass] = useState(true)
    console.log('state: ',state);
    console.log('touched: ',touched);
    const handleChange = (value) => {
        setState(value);
        setTouced(true);
    }
    const scroll = (key,props) => {
    var element = null;        
      switch (key) {
         case 'placementScore':
            element = document.getElementById('goal')
            if(pass){
            props.IncreasProgress(20)
            }
            setPass(false)
            break;
        case 'goal':
            element = document.getElementById('type')
            if(pass){
            props.IncreasProgress(15)
            }
            setPass(false)
            break;
        case 'type':
            element = document.getElementById('selecttime')
            if(pass){
            props.IncreasProgress(10)
            }
            setPass(false)
            break;
        case 'selecttime':
            element = document.getElementById('weakness')
            if(pass){
            props.IncreasProgress(13)
            }
            setPass(false)
            break;
        case 'weakness':
            element = document.getElementById('name')
            if(pass){
            props.IncreasProgress(12)
            }
            setPass(false)
            break;
        case 'name' :
            element = document.getElementById('email')
            if(pass){
            props.IncreasProgress(20)
            }
            setPass(false)
            break;
        case 'email' :
            if(pass){
            props.IncreasProgress(10)
            }
            setPass(false)
        element = document.getElementById('email')
        break;
        default:
            element = null
    }
    element.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
    console.log('element IS Working: ')
}
    return(
        <div className = {classes.parent} id = "placementScore">
            <div className = {classes.firstChild}>
                <h3>نمزه تعیین سطح خود را وارد کنید</h3>
                <div className = {classes.slider}>
                <Slider onChange = {handleChange} value = {state} />
                </div>
            </div>
            <div className = {classes.secondChild}>
                <Button
                    Invalid = {!touched}
                    touched={touched}
                    id={"placementScore"}
                    onClick={() => scroll("placementScore",props)}
                >
                ok
                </Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        IncreasProgress: (value) => dispatch(actionCreators.increasePer(value)),
        viewresult: () => dispatch(actionCreators.viewresult())
    }
}
export default connect(null, mapDispatchToProps)(PlacementScore)