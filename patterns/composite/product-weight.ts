import { PriceInterface } from './price-interface';
export class ProductWeight implements PriceInterface {

    private weight: number;
    private priceByWeight: number;
    private name: string;
    private category: string;


	constructor($weight: number, $priceByWeight: number, $name: string, $category: string) {
		this.weight = $weight;
		this.priceByWeight = $priceByWeight;
		this.name = $name;
		this.category = $category;
    }
    
    /**
     * Getter $weight
     * @return {number}
     */
	public getWeight(): number {
		return this.weight;
	}

    /**
     * Getter $priceByWeight
     * @return {number}
     */
	public getPriceByWeight(): number {
		return this.priceByWeight;
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
     * Setter $weight
     * @param {number} value
     */
	public setWeight(value: number) {
		this.weight = value;
	}

    /**
     * Setter $priceByWeight
     * @param {number} value
     */
	public setPriceByWeight(value: number) {
		this.priceByWeight = value;
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
        return this.getPriceByWeight() * this.getWeight();
    }
}