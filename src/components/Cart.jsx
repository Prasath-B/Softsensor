import React,{useState,useEffect} from 'react'
import {useLocation,Link} from 'react-router-dom'
import { connect } from "react-redux";
import './Home.css'

const Cart = ({cart}) => {

     const [isReadMore, setisReadMore] = useState(false)
    return (
        <div>
            <button  className='cart-back'> <Link to='/'>Go Back</Link></button>
              
            <h1 className='cart-title'>Cart</h1>
            <div className='posts'>
                {cart.map((post)=>{
              const {id,title,price,image,category,rating,description} =post
              return (<div key={id} className='product'>
                 <img src={image} alt='product' className='product-img' />
                  <h3>{title}</h3>
                   <p className='category'>Category: {category}</p>
                  <p className='category'>Rating:{rating.rate}</p>
                  <p className='product-price'>Price: ${price}</p>
                  <p className='description'>
                  {isReadMore ? description : description.substring(0,200) }
                  .....<i  className='read-more' onClick={()=>setisReadMore((prev) => !prev)}>{isReadMore ? 'Readless' : 'ReadMore'}</i></p>
                  
              </div>)
          })} 
            </div>
            
        </div>
    )
}
const mapStatetoProps = state =>{
    return {
        cart: state.cart
    }
}

export default connect(mapStatetoProps,null) (Cart) ;
