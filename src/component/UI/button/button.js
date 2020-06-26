import React,{Component} from 'react'
import classes from './button.module.css'
import {Spring} from 'react-spring/renderprops'
import {Button} from 'antd'
class Buttonn extends Component{
    render(){
        return(
            <Spring
                to={{
                    opacity:(this.props.Invalid) ? 0 : 1,
                    transform: this.props.Invalid ? 'translateY(100px)' : 'translateY(0px)',
                }}
                duration={200}
            >
               {props => <Button 
                            style={props}
                            className={classes.button}
                            onClick={this.props.onClick} 
                            type = 'primary'
                            size = "large"
                            >
                            {this.props.children}
                        </Button>} 
            </Spring>
        )
    }
}



export default  Buttonn