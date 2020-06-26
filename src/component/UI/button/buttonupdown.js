import React,{Component} from 'react'
import classes from './buttonupdown.module.css'

class ButtonUD extends Component {
    render() {
            return (
                <div 
                    className={classes.button}
                    onClick={this.props.onClick} 
                    >
                    {this.props.children}
                </div>
            )
        }
}

export default ButtonUD