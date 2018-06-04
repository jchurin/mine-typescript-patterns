import { expect } from 'chai';
import { ShapeFactory, SHAPE_TYPES } from './shape-factory';
import { Circle } from './circle';
import { Rectangle } from './rectangle';
import { Square } from './square';

describe('TEST: Factory class', () => {

    const circle = ShapeFactory.getShape(SHAPE_TYPES.SHAPE_CIRCLE);
    const rectangle = ShapeFactory.getShape(SHAPE_TYPES.SHAPE_RECTANGLE);
    const square = ShapeFactory.getShape(SHAPE_TYPES.SHAPE_SQUARE);
    const nullShape = ShapeFactory.getShape('asdasdasdasd');

    it('it should return a circle', () => {
        expect(circle).to.deep.equal(new Circle());
    });
    it('it should return a rectangle', () => {
        expect(rectangle).to.deep.equal(new Rectangle());
    });
    it('it should return a square', () => {
        expect(square).to.deep.equal(new Square());
    });
    it('it should return null', () => {
        expect(nullShape).to.deep.equal(null);
    });

});