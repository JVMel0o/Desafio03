import { IsNotEmpty, IsString } from "class-validator";


export class Product {

    @IsNotEmpty()
    @IsString()
    product_id: string;

    @IsNotEmpty()
    @IsString()
    product_name: string;
    
    @IsNotEmpty()
    @IsString()
    category: string;

    @IsNotEmpty()
    price: number;
    
    @IsNotEmpty()
    @IsString()
    employee_id: string

    constructor(product_id: string, product_name: string, category: string ,price: number, employee_id: string) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.category = category;
        this.price = price;
        this.employee_id = employee_id;
    }
}