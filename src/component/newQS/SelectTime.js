import React,{useState} from 'react'
import Select from '../UI/dropdown/select'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'
import classes from './SelectTime.module.css'
import Button from '../UI/button/button'
import {message} from 'antd'

const SelectTime = (props) => {
    
    const [touched,setTouched] = useState(false)
    const [pass,setPass] = useState(true)
    console.log("touched: ",touched);

    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
        setTouched(true);
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
        <div className = {classes.parent} id = "selecttime">
            <div className = {classes.firstChild}>
                <h3>تا ازمون چقدر وقت دارید</h3>
                <div className = {classes.SelectTime} >
                    <Select onClick = {handleMenuClick} />
                </div>
            </div>
            <div className = {classes.secondChild}>
                <Button
                    Invalid = {!touched}
                    touched={touched}
                    id={"selecttime"}
                    onClick={() => scroll("selecttime",props)}
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
export default connect(null, mapDispatchToProps)(SelectTime)