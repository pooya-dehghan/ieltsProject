import React,{Component} from 'react'
import Qsection from '../qSection/qSection'
import classes from './main.module.css'
import Qss from '../qSection/qSectionSelect/qss'
class Main extends Component {
    componentDidMount() {
        var element = document.getElementById('name')
        element.scrollIntoView({behavior: "smooth", block: "center"})
    }
    state =  {
        Form : {
           name : {
            elementType:'input',   
            elementConfig:{
                type: 'text',
                placeholder: 'YourName',
                label: 'please enter your name'
                },
            validity:{
                requierd:true, 
                minLength:3,
                VALID:false,
                touched:false           
            },
            value:''
        },
        lastName: {
            elementType:'input',   
            elementConfig:{
                type: 'text',
                placeholder: 'LastName',
                label: 'give us your lastname'
                },
            validity:{
                requierd:true,
                minLength:3,
                VALID:false,
                touched:false
            },
            value: ''
        },
        // semester:{
        //     elementType: 'input',
        //     elementConfig:{
        //         type: 'bumber',
        //         placeholder: 'Your Semester',
        //         label: 'we have to know your semester'
        //     },
        //     validity:{
        //         requierd:true,
        //         VALID:false,
        //         minLength:1,
        //         maxLength:2,
        //         touched:false
        //     },
        //     value:''
        // },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'E-mail',
                label: 'put down your email address for result'
            },
             validity:{
                requierd:true, 
                VALID:false,
                touched:false 
            },
            value: ''
        },
        // Time: {
        //     elementType:'select',   
        //     elementConfig: {
        //         options: [
        //             {value: '2Weeks',displayvalue:'2Weeks'},
        //             {value: '2Month',displayvalue:'2Month'},
        //             {value: '6Month',displayvalue:'6Month'},
        //             {value: '1Year',displayvalue:'1Year'},
        //         ],
        //         label: 'how much time do you have??!!'
        //     },
        //     validity:{
        //         requierd:true, 
        //         VALID:true,
        //         touched:false 
        //     },
        //     value: '2Weeks'
        // }
    },
    formIsValid:false,
}

    validationHandler(value,rules){
        let isValid = false
        if(rules.requierd) {
            isValid = value.trim() !== ''
        }
        if(rules.maxLength && isValid){
                isValid = value.length <= rules.maxLength
        }
        if(rules.minLength && isValid){
            isValid = value.length >= rules.minLength
        }
        return isValid
    }

    inputChangeHandler = (event,initializer) => {
        let updatedForm = {
            ...this.state.Form
        }
        let inputOrgenizer = {
            ...updatedForm[initializer]
        }
        inputOrgenizer.value = event.target.value
        inputOrgenizer.validity.VALID = this.validationHandler(event.target.value,inputOrgenizer.validity)
        inputOrgenizer.validity.touched = true
        updatedForm[initializer] = inputOrgenizer

        let formIsValid = true
        for(let initial in updatedForm){
            formIsValid = updatedForm[initial].validity.VALID && formIsValid
        }
        this.setState({Form:updatedForm,formIsValid:formIsValid})
    }
    render(){
         let formElementArray = [];
         for (let key in this.state.Form) {
             formElementArray.push({
                 id: key,
                 config: this.state.Form[key]
             })
         }
        let component =
            <>
                {formElementArray.map((elem) => {
                    return (
                        <Qsection 
                            elementType={elem.config.elementType}
                            elementConfig={elem.config.elementConfig}
                            value={elem.config.value}
                            key={elem.id}
                            id={elem.id}
                            changed={(event) => this.inputChangeHandler(event,elem.id)}
                            Invalid={!elem.config.validity.VALID}
                            touched={elem.config.validity.touched}
                            disabled={!this.state.formIsValid}
                            label={elem.config.elementConfig.label}
                        />
                    )
                }
            )
        }
        <Qss
            id = "time"
         />
        <Qss 
            id = "semester"
        />
            </>
        return(
            <div className={classes.main}>
                {component}
                
            </div>
        )
    }
}

export default Main