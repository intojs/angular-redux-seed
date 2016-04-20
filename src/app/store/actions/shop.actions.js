export const SET_SHOP_NAME = 'SET_SHOP_NAME';

export class ShopActions {
	constructor() {
	}

	setShopName(shopName) {
		return {
			type: SET_SHOP_NAME,
			shopName: shopName
		};
	}
}