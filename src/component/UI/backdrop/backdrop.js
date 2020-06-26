import React from 'react' 
import classes from './backdrop.module.css'

const backdrop = (props) => {
    return(
        props.show ? 
        <div onClick={props.cancel} className={classes.backdrop} id = {props.id}>
        </div>
        :
        null
    )
}

export default backdrop