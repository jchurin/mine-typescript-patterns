import { PriceInterface } from './price-interface';

export class UnitProduct implements PriceInterface {

    private quantity: number;
    private price: number;
    private name: string;
    private category: string;


	constructor($quantity: number, $price: number, $name: string, $category: string) {
		this.quantity = $quantity;
		this.price = $price;
		this.name = $name;
		this.category = $category;
    }
    

    /**
     * Getter $quantity
     * @return {number}
     */
	public getQuantity(): number {
		return this.quantity;
	}

    /**
     * Getter $price
     * @return {number}
     */
	public getPrice(): number {
		return this.price;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public getName(): string {
		return this.name;
	}

    /**
     * Getter $category
     * @return {string}
     */
	public getCategory(): string {
		return this.category;
	}

    /**
     * Setter $quantity
     * @param {number} value
     */
	public setQuantity(value: number) {
		this.quantity = value;
	}

    /**
     * Setter $price
     * @param {number} value
     */
	public setPrice(value: number) {
		this.price = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public setName(value: string) {
		this.name = value;
	}

    /**
     * Setter $category
     * @param {string} value
     */
	public setCategory(value: string) {
		this.category = value;
	}    
    
    getTotalPrice(): number {
        return this.getQuantity() * this.getPrice();
    }
}