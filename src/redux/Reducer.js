import { ADD_CARTO,FETCH_DATA } from "./ActionTypes"

const initialState   = {
    products:[],
    cart:[],
    error:''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){

        case FETCH_DATA:
            return{
                ...state,
                products: action.payload
            }
        case ADD_CARTO:
            console.log(action.payload)     
            const item = state.products.find( (product) => product.id === action.payload );
            //         // Check if Item is in cart already
            // const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false );
            // console.log(state.cart)
            return {
                ...state,
                cart: [...state.cart, item],
            }

        default: return state
             
    }
}

export default reducer;