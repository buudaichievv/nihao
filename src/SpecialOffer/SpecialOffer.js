import React from 'react'
import { Container } from 'react-bootstrap'
import './SpecialOffer.css'
import {offer}from '../Main'
let Offer =(props)=>{
    return(
    <div className = 'Special_block'> {props.key}
        <img className = 'Special_img' src = {props.img}/>
        <p className = 'Special_text'>{props.text}</p>
        <div className='Special_block_red'>
            <p className = 'Special_price'>{props.price}</p>
            <span className = 'Special_like'>{props.like}</span>
        </div>
    </div>
    )
}
export default function SpecialOffer(props) {
    return (
        <Container>
            <div className='SpecialOffer_line'>
                <p className = 'SpecialOffer_text'>Специальное предложение</p>
            </div>
            <div className='SpecialOffer_wrapper'>
                {
                    offer.map((el,index)=>{
                        return(
                        <Offer img={el.img} text={el.text} like={el.like} price={el.price} key={index}/>
                        )
                    })
                }
            </div>
        </Container>
    )
}
