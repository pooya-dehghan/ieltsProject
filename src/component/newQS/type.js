import React,{useState} from 'react'
import CheckBox from '../UI/checkbox/checkbox'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'
import classes from './type.module.css'
import Button from '../UI/button/button'

const PlacementScore = (props) => {
    const [general , setGeneral] = useState(false)
    const [academic , setAcademic] = useState(false)
    const [touched,setTouched] = useState(false)
    const [pass,setPass] = useState(true)
    console.log("general: ",general);
    console.log("academic: ",academic);
    console.log("touched: ",touched);
    
    const changeHandlerG = (e) => {
        setTouched(true)
        setGeneral(e.target.checked)
    }
    const changeHandlerA = (e) => {
        setTouched(true)
        setAcademic(e.target.checked)
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
        <div className = {classes.parent} id = "type">
            <div className = {classes.firstChild}>
                <h3>چه نوع ازمونی شرکت میکنید</h3>
                <div className = {classes.checkboxes}>
                    <CheckBox title="general" checked = {general} onChange = {changeHandlerG} />
                    <CheckBox title="academic" checked = {academic} onChange = {changeHandlerA} />
                </div>
            </div>
            <div className = {classes.secondChild}>
                <Button
                    Invalid = {!touched}
                    touched={touched}
                    id={"type"}
                    onClick={() => scroll("type",props)}
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