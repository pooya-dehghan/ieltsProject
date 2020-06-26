import React, { Component } from 'react' 
import classes from './input.module.css'

class Input extends Component {
    render() {
        let inputElement = null
        switch(this.props.elementType){
            case 'input' :
                inputElement =
            <div className = {classes.inputParent}>
                <input
                    id={this.props.id}
                    placeholder={this.props.elementConfig.placeholder}
                    type={this.props.elementConfig.type}
                    onChange={this.props.changed}
                    className={classes.input}>
                </input>
                <span className = {classes.underline}></span>
            </div>
                break
            case 'select' : 
                inputElement = 
                <select
                    id={this.props.id}
                    value={this.props.value}
                    className={classes.select}
                    onChange={this.props.changed}
                >
                    {this.props.elementConfig.options.map((opt) => 
                   { return(
                        <option value={opt.value}>{opt.displayvalue}</option>
                    )})}
                </select>
                break
                default : 
                inputElement = 
                <input
                    placeholder={this.props.elementConfig.placeholder}
                    type={this.props.elementConfig.type}
                    onChange={this.props.changed}
                    className={classes.input}>
                </input>
        }
        return(
            <div className={classes.parent}>
                <label className={classes.label}>{this.props.label}</label>
                {inputElement}
                {(this.props.Invalid && this.props.touched) && <div className={classes.error}>NOT VALID</div>}
            </div>
        )
    }
}

export default Input