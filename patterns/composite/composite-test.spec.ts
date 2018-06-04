import { Order } from './order';
import { ProductWeight } from './product-weight';
import { UnitProduct } from './unit-product';
import { CompoundProduct } from './compound-product';
import { expect } from 'chai';

describe('TEST: Composite class', () => {

    const order: Order = new Order('SEAS - Estudios abiertos');
    const jamon: ProductWeight = new ProductWeight(5.0, 10.0, 'Jamón Ibérico', 'Embutidos');
    const lomo: ProductWeight = new ProductWeight(0.8, 5.0, 'Lomo Ibérico', 'Embutidos');
    const fideos: UnitProduct = new UnitProduct(3, 1.50, 'Paquete de fideos', 'Pasta');
    const vino: UnitProduct = new UnitProduct(6, 2.25, 'Botella de vino', 'Vinos');
    
    const cajaNavideña: CompoundProduct = new CompoundProduct();

    cajaNavideña.addProduct(vino);
    cajaNavideña.addProduct(lomo);
    
    order.addProduct(jamon);
    order.addProduct(fideos);

    it('should be equal to...', () => {
        // expect(order.getTotalPrice()).to.equal(12);
    });
    
    order.addProduct(cajaNavideña);
    
    it('should be equal to...', () => {
        // expect(order.getTotalPrice()).to.equal(12);
    });

});