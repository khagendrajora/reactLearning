const initialData = {
    cartCount: 0
}

const cartReducer = (state = initialData, action) => {          // state takes the in initial data and action defins what action to be performed by the fun
    switch (action.type) {
        case 'ADD_To_Cart':
            return {
            
                cartCount: ++state.cartCount
            }
            case 'Remove_from_cart':
                return{
                    cartCount:--state.cartCount 
                }
        default:
            return state

    }
}

export default cartReducer