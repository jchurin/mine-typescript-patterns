import { Shape } from "./shape";

export class Rectangle implements Shape {
    draw(): void {
        console.log("Class::Rectangle - Method::draw()");
    }
}