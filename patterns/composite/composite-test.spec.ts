import { Order } from './order';
import { ProductWeight } from './product-weight';
import { UnitProduct } from './unit-product';
import { CompoundProduct } from './compound-product';
import { expect } from 'chai';

describe('TEST: Composite class', () => {

    const order: Order = new Order('SEAS - Estudios abiertos');
    const jamon: ProductWeight = new ProductWeight(6.0, 10.0, 'Jamón Ibérico', 'Embutidos');
    const lomo: ProductWeight = new ProductWeight(3.8, 5.0, 'Lomo Ibérico', 'Embutidos');
    const fideos: UnitProduct = new UnitProduct(3, 1.50, 'Paquete de fideos', 'Pasta');
    const vino: UnitProduct = new UnitProduct(6, 7.25, 'Botella de vino', 'Vinos');
    
    const cajaNavideña: CompoundProduct = new CompoundProduct();

    cajaNavideña.addProduct(vino);
    cajaNavideña.addProduct(lomo);
    
    order.addProduct(jamon);
    order.addProduct(fideos);
    
    it('without cajaNavideña should be equal to ' + (jamon.getTotalPrice() + fideos.getTotalPrice()), () => {
        expect(order.getTotalPrice()).to.equal(jamon.getTotalPrice() + fideos.getTotalPrice());
    });
    
    it('with cajaNavideña should be equal to ' + (jamon.getTotalPrice() + fideos.getTotalPrice() + cajaNavideña.getTotalPrice()), () => {
        order.addProduct(cajaNavideña);
        expect(order.getTotalPrice()).to.equal(jamon.getTotalPrice() + fideos.getTotalPrice() + cajaNavideña.getTotalPrice());
    });

});