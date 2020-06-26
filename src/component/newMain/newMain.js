import React,{useEffect,useState} from 'react'
import classes from './newMain.module.css'
import PlacementScore from '../newQS/placementScore'
import Type from '../newQS/type'
import SelectTime from '../newQS/SelectTime'
import Goal from '../newQS/goal'
import Weakness from '../newQS/weakness'
import Name from '../newQS/name'
import Email from '../newQS/validemail'

const NewMain = () => {
    
useEffect(() => {
    var element = document.getElementById('placementScore')
    element.scrollIntoView({
        behavior: "smooth",
        block: "center"
    })
},[])

    return (
      <div className={classes.main} >
          <PlacementScore />
          <Goal />
          <Type />
          <SelectTime />
          <Weakness />
          <Name />
          <Email />
      </div>
    );
}


export default NewMain