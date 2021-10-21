import { ADD_CARTO,FETCH_DATA } from "./ActionTypes";
import axios from 'axios'

export const fetchProducts = (products)=>{
    return {
        type: FETCH_DATA,
        payload: products
    }
}

export const ADD_CART = (id) =>{
    return {
        type: ADD_CARTO,
        payload: id
    }
}


export const getData = () =>{
    return (dispatch =>{
       
        axios.get('https://fakestoreapi.com/products')
            .then(response =>  {
                const products = response.data;
                dispatch(fetchProducts(products))
            })
            .catch(error =>{
                console.log(error.message)
            })
    })
}