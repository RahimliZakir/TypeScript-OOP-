import { IPow } from './interface';

class FromInterface implements IPow {
    Pow(a: number): number {
        return Math.pow(a, 2);
    }
}

let state = new FromInterface();
let powed = state.Pow(7);

alert(powed);