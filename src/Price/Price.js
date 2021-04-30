import React,{useState}from 'react'
import {Container} from 'react-bootstrap'
import {offer}from '../Main'
import price from './Price.module.css'
import {ControlledCarousel} from '../ModalCorousel/ModalCorousel'
import Modal from '../Modal/Modal'
import {NavLink} from "react-router-dom"
let Offer =(props)=>{
    const [modal, setModal] = useState(false)
    return(
        <>
         <Modal modal={modal} setModal={setModal}>
             <div className={price.modal_flex}>
             <div className={price.modal_corousel}>
                <ControlledCarousel img={props.img}/>
                <button className={price.more}>узнать больше</button>
             </div >
             <div className={price.modal_info}>
                <div className={price.modal_info_blur}>
                    <h5>{props.text}</h5>
                    <span className={price.modal_info_span}>{props.price}</span>
                    <div className={price.modal_info_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident, ipsa officia aliquam perspiciatis voluptatibus molestiae necessitatibus, explicabo, modi voluptates unde. Totam eius distinctio, explicabo nam natus facere libero laudantium?</div>
                    <div className="modal_left_icon">
                            <NavLink to=""><svg className="header__corzina header__point"  viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 0H1V30H31V0Z" fill="white"/>
                            <path d="M5.6875 7.5H26.1268C26.2641 7.5 26.3997 7.53016 26.5241 7.58835C26.6485 7.64655 26.7585 7.73135 26.8465 7.83676C26.9345 7.94218 26.9983 8.06564 27.0333 8.1984C27.0683 8.33117 27.0737 8.47001 27.0492 8.60511L25.0049 19.8551C24.9656 20.0711 24.8518 20.2665 24.6832 20.4072C24.5147 20.5479 24.3021 20.625 24.0825 20.625H8.86546C8.64599 20.625 8.43348 20.548 8.26494 20.4074C8.09641 20.2668 7.98254 20.0716 7.94316 19.8557L4.97552 3.58181C4.93614 3.36591 4.82227 3.17066 4.65374 3.03008C4.48521 2.8895 4.27269 2.8125 4.05323 2.8125H1.9375" fill="white"/>
                            <path d="M5.6875 7.5H26.1268C26.2641 7.5 26.3997 7.53016 26.5241 7.58835C26.6485 7.64655 26.7585 7.73135 26.8465 7.83676C26.9345 7.94218 26.9983 8.06563 27.0333 8.1984C27.0683 8.33117 27.0737 8.47001 27.0492 8.60511L25.0049 19.8551C24.9656 20.0711 24.8518 20.2665 24.6832 20.4072C24.5147 20.5479 24.3021 20.625 24.0825 20.625H8.86546C8.64599 20.625 8.43348 20.548 8.26494 20.4074C8.09641 20.2668 7.98254 20.0716 7.94316 19.8557L4.97552 3.58181C4.93614 3.36591 4.82227 3.17066 4.65374 3.03008C4.48521 2.8895 4.27269 2.8125 4.05323 2.8125H1.9375" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.4375 26.7188C10.2142 26.7188 10.8438 26.0892 10.8438 25.3125C10.8438 24.5358 10.2142 23.9062 9.4375 23.9062C8.66085 23.9062 8.03125 24.5358 8.03125 25.3125C8.03125 26.0892 8.66085 26.7188 9.4375 26.7188Z" fill="#FF0000"/>
                            <path d="M23.5 26.7188C24.2767 26.7188 24.9062 26.0892 24.9062 25.3125C24.9062 24.5358 24.2767 23.9062 23.5 23.9062C22.7233 23.9062 22.0938 24.5358 22.0938 25.3125C22.0938 26.0892 22.7233 26.7188 23.5 26.7188Z" fill="#FF0000"/>
                            </svg>
                            </NavLink>
                            <NavLink to=""><svg className="header__heart header__point" viewBox="0 0 26 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 22.3125C13 22.3125 1.28125 15.75 1.28125 7.78126C1.28149 6.37282 1.76952 5.00794 2.66236 3.91866C3.5552 2.82938 4.79774 2.08295 6.17874 1.80627C7.55973 1.52959 8.99393 1.73974 10.2375 2.40099C11.481 3.06224 12.4572 4.13377 13 5.43341L13 5.43342C13.5428 4.13378 14.5189 3.06224 15.7625 2.40099C17.0061 1.73974 18.4403 1.52959 19.8213 1.80627C21.2023 2.08295 22.4448 2.82938 23.3376 3.91866C24.2305 5.00794 24.7185 6.37282 24.7188 7.78126C24.7188 15.75 13 22.3125 13 22.3125Z"  stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </NavLink>
                            <NavLink to="" className="header__input">
                                <svg className="header__user header__point"  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 0H0V30H30V0Z" stroke-width="0" />
                                <path d="M15 18.75C19.1421 18.75 22.5 15.3921 22.5 11.25C22.5 7.10786 19.1421 3.75 15 3.75C10.8579 3.75 7.5 7.10786 7.5 11.25C7.5 15.3921 10.8579 18.75 15 18.75Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.63086 25.3114C4.78347 23.3164 6.4408 21.6598 8.43635 20.508C10.4319 19.3563 12.6954 18.75 14.9995 18.75C17.3035 18.75 19.567 19.3564 21.5626 20.5082C23.5581 21.6599 25.2154 23.3166 26.3679 25.3116" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className="header__inputText">Войти</p>
                            </NavLink>
                    </div>
                </div>
             </div>
             </div>
        </Modal>
    <div className = {price.Price_block}>{props.key}
        <img className = {price.Price_img}  variant="primary" onClick={()=>{
            setModal(!modal)
        }} src = {props.img}/>
        <p className = {price.Price_tt_text}>{props.text}</p>
        <div className={price.Price_block_red}>
            <p className = {price.Price_price}>{props.price}</p>
            <span className = {price.Price_like}>{props.like}</span>
        </div>
    </div>
    </>
    )
}
export default function Price(props) {
    return (
        <Container>
        <div className={price.price_line}>
            <p className={price.Price_text}>Акции</p>
        </div>
        <div className={price.Price_wrapper}>
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
