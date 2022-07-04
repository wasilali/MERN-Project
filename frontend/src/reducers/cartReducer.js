import { ADD_TO_CART,
    REMOVE_CART_ITEMDS,
    SAVE_SHIPPING_INFO,
    } from "../constants/cartConstant";

export const cartReducer = (state={cartItems:[] ,shippingInfo:{}},action)=>{
    switch (action.type) {
        case ADD_TO_CART:
        const items = action.payload;

        const isItemExist= state.cartItems.find((i)=>(i.product===items.product))
            
            if (isItemExist) {
                return{
                    ...state,
                    cartItems:state.cartItems.map((i)=>
                    (i.product===isItemExist.product ? items:i))
                }
            }else{
                return{
                ...state,
                cartItems:[...state.cartItems,items]
                }

            }
            case REMOVE_CART_ITEMDS:
                return {
                    ...state,
                    cartItems:state.cartItems.filter(i=>i.product !== action.payload)
                };
                case SAVE_SHIPPING_INFO:
                    return{
                        ...state,
                        shippingInfo:action.payload,
                    }
    
        default:
        return state
    }
}