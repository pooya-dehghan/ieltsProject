import React,{Component} from 'react'
import Modal from '../UI/modal/modal'
import Backdrop from '../UI/backdrop/backdrop'
import Button from '../UI/button/button'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/actionCreators'
class ViewResultModal extends Component {
    
    cancelBackDrop = () => {
        this.props.cancelView()
    }
    sendData = () => {
        this.props.sendData()
    }
    render(){
        return(
            <>
                <Backdrop show={this.props.show} cancel = {this.cancelBackDrop} />
                <Modal show={this.props.show}>
                    <div> due to your given data the ruslts are ready for you  press the button to continue</div>
                    <Button content = "View Results " onClick={this.sendData}></Button>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = ( state ) => {
    return{
        show: state.viewresult.show,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        cancelView: () =>  dispatch(actionCreators.cancelView()),
        sendData: () => dispatch(actionCreators.sendData())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewResultModal)