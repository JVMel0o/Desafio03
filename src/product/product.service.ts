import { Injectable } from "@nestjs/common";
import { Product } from "./product.models";

@Injectable()
export class ProductService {

    private products: Array<Product> = [];

    public createProduct(product: Product): Product {
        this.products.push(product);
        return product;
    }

    public readAllProducts(): Product[] { 
        return this.products;
    }

    public readOneProduct(params): Product {
        let index = this.products.findIndex(product => product.product_name == params || product.category == params || product.price == params || product.employee_id == params);
        return this.products[index];
    }

    public readOneById(params) {
        return this.products.findIndex(product => product.product_id == params)
    }

    public updateProduct(params, product): Product {
        let index = this.readOneById(params);
        this.products[index].product_name = product.product_name;
        this.products[index].category = product.price;
        this.products[index].price = product.price;
        this.products[index].employee_id = product.employee_id;
        return this.products[index];
    }

    public deleteProduct(params) {
        const index = this.readOneById(params);
        this.products.splice(index, 1);
    }

    
}