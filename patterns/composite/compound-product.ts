import { PriceInterface } from './price-interface';

export class CompoundProduct implements PriceInterface {

    private products: Array<PriceInterface>;

	constructor() {
		this.products = new Array<PriceInterface>();
    }
    
    public addProduct(price: PriceInterface): void {
        this.products.push(price)
    }
    
    public removeProduct(price: PriceInterface): void {
        this.products.slice(1); // TODO: Find key of object value
    }
    
    /**
     * Getter $products
     * @return {Array<PriceInterface>}
     */
	public getProducts(): Array<PriceInterface> {
		return this.products;
	}

    getTotalPrice(): number {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.getTotalPrice();
        }
        return totalPrice;
    }
}