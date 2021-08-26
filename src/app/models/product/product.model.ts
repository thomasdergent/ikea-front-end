import { Store } from "../store/store.model";

export class Product {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    articleNumber: string;
    delivery: boolean;
    material: string;
    maintenance: string;
    environment: string;
    price: number;
    size: string;
    storeStocks: Store[];
    constructor(
        name: string,
        category: string,
        description: string,
        image: string,
        articleNumber: string,
        delivery: boolean,
        material: string,
        maintenance: string,
        environment: string,
        price: number,
        size: string,
        id?: number,
        storeStocks?: Store[],
    ) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.image = image;
        this.articleNumber = articleNumber;
        this.delivery = delivery;
        this.material = material;
        this.maintenance = maintenance;
        this.environment = environment;
        this.price = price;
        this.size = size;
        this.storeStocks = storeStocks;
        if (id) {
            this.id = id;
        }
    }
}
