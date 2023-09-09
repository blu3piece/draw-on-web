import { ctx } from "./canvas";
class Brush {
    static ctx;
    fillType;
    constructor(brushType) {
        
    }

    fill() {
        throw new Error("Fill must be ")
    }
}

Brush.ctx = ctx;

export { Brush };