import { CartItem } from "./CartItem";

export class Cart {
    constructor(
        public id: string,
        public userId: string,
        public items: CartItem[]
    ) {}
}