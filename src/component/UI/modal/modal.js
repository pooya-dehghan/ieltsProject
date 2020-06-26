import React from 'react'
import styled from 'styled-components'
import {css} from 'styled-components'
const Modal = (props) => {
    return(
           <Modall show = {props.show} >
               {props.children}
           </Modall>
    )
}

const Modall = styled.div`
    position: fixed;
    width: 70% ;
    border-radius:15px;
    box-shadow: 0px 1px 5px 0px black;
    left: 15% ;
    top: 30% ;
    box-sizing: border-box;
    z-index: 20;
    background-color: white;
    padding: 16px;
    ${props => props.show ?
        css`
            opacity:1;
        `
        :
        css `
            opacity:0;
        `
    }
    transition: all 600ms ease;
`

export default Modal