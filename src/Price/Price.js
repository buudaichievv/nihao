import React,{useState}from 'react'
import { Container,Carousel} from 'react-bootstrap'
import {offer}from '../Main'
import './Price.css'
import Modal from '../Modal/Modal'
let Offer =(props)=>{
    const [modal, setModal] = useState(false)
    return(
        <>
         <Modal modal={modal} setModal={setModal}>
            <Carousel className = 'carousel_modal'>
                <Carousel.Item>
                <img className = 'd-block'src = {props.img}/>
                </Carousel.Item>
                <Carousel.Item>
                <img className = 'd-block'src = {props.img}/>
                </Carousel.Item>
            </Carousel>
        </Modal>
    <div className = 'Price_block'>{props.key}
        <img className = 'Price_img'  variant="primary" onClick={()=>{
            setModal(!modal)
        }} src = {props.img}/>
        <p className = "Price_tt_text">{props.text}</p>
        <div className='Price_block_red'>
            <p className = 'Price_price'>{props.price}</p>
            <span className = 'Price_like'>{props.like}</span>
        </div>
    </div>
    </>
    )
}
export default function Price(props) {
    return (
        <Container>
        <div className='Price_line'>
            <p className="Price_text">Акции</p>
        </div>
        <div className='Price_wrapper'>
                {
                    offer.map((el,index)=>{
                        return(
                        <Offer img={el.img} text={el.text} like={el.like} price={el.price} key = {index}/>
                        )
                    })
                }
        </div>
        </Container>
    )
}
