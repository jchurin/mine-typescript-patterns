import { Shape } from './shape';
import { Circle } from './circle';
import { Rectangle } from './rectangle';
import { Square } from './square';

export class ShapeFactory {

    public static getShape(shapeType: string): Shape {
        let entity: Shape = null;
        switch (shapeType) {
            case SHAPE_TYPES.SHAPE_CIRCLE:
                entity = new Circle();
                break;
            case SHAPE_TYPES.SHAPE_RECTANGLE:
                entity = new Rectangle();
                break;
            case SHAPE_TYPES.SHAPE_SQUARE:
                entity = new Square();
                break;
        }
        return entity;
    }
}

export const SHAPE_TYPES = {
    SHAPE_CIRCLE: "CIRCLE",
    SHAPE_RECTANGLE: "RECTANGLE",
    SHAPE_SQUARE: "SQUARE",
}
