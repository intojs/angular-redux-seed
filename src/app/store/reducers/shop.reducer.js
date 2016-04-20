import * as ShopActions from '../actions/shop.actions.js';

const initialState = {
	shopName: ''
};

export function shopReducer(state = initialState, action = {}) {

    switch (action.type) {
        
        case ShopActions.SET_SHOP_NAME:        	
			
			return Object.assign({}, state, {
				shopName: action.shopName
			});
        
        default:
            return state;
    }
}