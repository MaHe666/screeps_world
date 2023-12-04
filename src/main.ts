import {sayHello} from "./modules/utils";
import {errorMapper} from "./modules/errorMapper";

export const loop = errorMapper(() => {
    sayHello()
})