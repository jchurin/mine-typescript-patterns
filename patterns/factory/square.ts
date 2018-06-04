import { Shape } from './shape';

export class Square implements Shape {
    draw(): void {
        console.log("Class::Square - Method::draw()");
    }
}