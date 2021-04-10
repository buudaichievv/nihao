import React from 'react'
import {Container} from 'react-bootstrap'
import './Category.css'
const List =(props)=>{
    return(
            <div className = 'category_block'>{props.key}
                <button className = 'category_svg' >{props.img}</button><p className='category_title'>{props.title}</p>
            </div>
    )
}
export default function Category(props) {
    return (
        <Container>
            <div className = 'category_line'>
                <p className= 'category_text'>Категория</p>
            </div>
                        <div className='category_wrapper'>
                                {
                                    props.category.map((el,index)=>{
                                        return(
                                        <List img={el.img} title={el.title} option={el.image} key={index}/>
                                        )
                                    })
                                }
                        </div>    
        </Container>
    )
}
