import { Product } from "../product/product.model";

export class Store {
    id: number;
    storeName: string;
    province: string;
    city: string;
    street: string;
    number: number;
    categoryProducts: Product[];
    constructor(
        storeName: string,
        province: string,
        city: string,
        street: string,
        number: number,
        id?: number,
        categoryProducts?: Product[]
    ) {
        this.storeName = storeName;
        this.province = province;
        this.city = city;
        this.street = street;
        this.number = number;
        this.categoryProducts=categoryProducts;
        if (id){
            this.id = id;
        }
    }
}
