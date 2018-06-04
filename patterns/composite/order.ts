import { CompoundProduct } from './compound-product';
import { PriceInterface } from './price-interface';
import { UnitProduct } from './unit-product';
import { ProductWeight } from './product-weight';
export class Order extends CompoundProduct {

    private client: string;


    constructor($client: string) {
        super();
        this.client = $client;
    }

    public addProduct(product: PriceInterface): void {
        super.addProduct(product);
    }

    public removeProduct(product: PriceInterface): void {
        super.removeProduct(product);
    }

    /**
     * Metodo que sirve para fijar el numero de unidades de un
     * UnitProduct de nuestro Order
     * @param product 
     * @param finalQuantity 
     */
    public establishQuantity(product: PriceInterface, finalQuantity: number): void {
        // if (product instanceof UnitProduct) {
        //     (
        //         (UnitProduct) super.getProducts()
        //             .get(
        //                 super.getProducts()
        //                     .indexOf(product)
        //             )
        //     ).setQuantity(finalQuantity);
        // }
    }

    /**
     * Metodo que establece el peso final de un ProductWeight
     * @param product 
     * @param finalWeight 
     */
    public establishWeight(product: PriceInterface, finalWeight: number): void {
        // if (product instanceof ProductWeight) {
        //     (
        //         (ProductWeight) super.getProducts()
        //             .get(
        //                 super.getProducts().indexOf(product)
        //             )
        //     ).setWeight(finalWeight);
        // }
    }

}