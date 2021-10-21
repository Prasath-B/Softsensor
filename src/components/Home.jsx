import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { getData,ADD_CART } from '../redux/Action';

 function  Home ({products,getData,ADD_CART}) {

    const [posts, setposts] = useState([])
    const [isReadMore, setisReadMore] = useState(false)


        useEffect(() => {
            getData()
        },[])
    
  

    return (
        <div className='posts'>
          {products.map((post)=>{
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
                  <button onClick = {()=>{ADD_CART(id)}} ><Link className='add-cart'  to={{pathname:'/cart',state: post}}>Add to cart</Link></button>
              </div>)
          })}  
        </div>
    )

}

const mapStatetoProps = state =>{
    return {
        products: state.products
    }
}

const mapDispatchtoProps = dispatch =>{
    return {
        getData: ()=> dispatch(getData()),
        ADD_CART: (id) => dispatch(ADD_CART(id))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps) (Home);
 