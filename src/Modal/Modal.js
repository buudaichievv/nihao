import React from 'react'
import './Modal.css'


export default function Modal(props) {
    return (
        <div className='modal_wrapper' style={props.modal ? {display:'block'} : {display:'none'}}>
            <div className="modal_body">
                <div className='modal_header'>
                <p className="modal_close" onClick={()=>{props.setModal(!props.modal)}}>×</p>
                <h2 className='modal_title'>Быстрый просмотр</h2>
                </div>
                {props.children}
            </div>
        </div>
    )
}
