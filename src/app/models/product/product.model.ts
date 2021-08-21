export class Product {
    id: string;
    storeName: string;
    name: string;
    category: string;
    articleNumber: string;
    delivery: boolean;
    material: string;
    maintenance: string;
    environment: string;
    stock: number;
    price: number;
    size: string;
    constructor(
        storeName: string,
        name: string,
        category: string,
        articleNumber: string,
        delivery: boolean,
        material: string,
        maintenance: string,
        environment: string,
        stock: number,
        price: number,
        size: string,
        id: string
    ) {
        this.storeName = storeName;
        this.name = name;
        this.category = category;
        this.articleNumber = articleNumber;
        this.delivery = delivery;
        this.material = material;
        this.maintenance = maintenance;
        this.environment = environment;
        this.stock = stock;
        this.price = price;
        this.size = size;
        if (id) {
            this.id = id;
        }
    }
}
