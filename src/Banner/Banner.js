import React from 'react'
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container } from 'react-bootstrap';
import cube from './img/cube.jpg'
import laptop from './img/laptop.jpg'
import phone from './img/phone.jpg'

export default function Banner() {
    return (
      <Container> 
        <div>
            <div className = 'banner_line'>
                <p className= 'banner_text'>NIHAO KG - крупнейший оптовый интернет магазин Китая</p>
            </div>
           <Carousel className = 'carousel'>
             <Carousel.Item>
             <img className = 'd-block'src = {cube}/>
             </Carousel.Item>
             <Carousel.Item>
             <img className = 'd-block'src = {laptop}/>
             </Carousel.Item>
             <Carousel.Item>
             <img className = 'd-block'src = {phone}/>
             </Carousel.Item>
           </Carousel>
        </div>
        </Container>   
    )
    
}
