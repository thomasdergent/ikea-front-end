import { Product } from "../product/product.model";

export class Store {
    id: number;
    storeName: string;
    province: string;
    city: string;
    street: string;
    number: number;
    products: Product[];
    constructor(
        storeName: string,
        province: string,
        city: string,
        street: string,
        number: number,
        id?: number,
        products?: Product[]
    ) {
        this.storeName = storeName;
        this.province = province;
        this.city = city;
        this.street = street;
        this.number = number;
        this.products=products;
        if (id){
            this.id = id;
        }
    }
}
