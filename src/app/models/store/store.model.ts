export class Store {
    id: string;
    storeName: string;
    articleNumber: string;
    stock: number;
    constructor(
        storeName: string,
        articleNumber: string,
        stock: number,
        id?: string,
    ) {
        this.storeName = storeName;
        this.articleNumber = articleNumber;
        this.stock = stock;
        if (id){
            this.id = id;
        }
    }
}
