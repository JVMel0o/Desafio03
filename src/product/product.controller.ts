import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.models";
import { ProductService } from "./product.service";


@Controller('api/v1/product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post()
    public createEmployee(@Body() product: Product): Product {
        return this.productService.createProduct(product);
    }

    @Get()
    public readAllProduct(): Product[] {
        return this.productService.readAllProducts();
    }

    @Get(':product_name' || ':category' || ':price' || ':employee_id' )
    public readOneProduct(@Param('product_name' || 'category' || 'price' || 'employee_id') params): Product {
        return this.productService.readOneProduct(params);
    }

    @Put(':product_id')
    public updateProduct(@Param('product_id') params, @Body() product: Product): Product {
        return this.productService.updateProduct(params, product);
    }

    @Delete(':product_id')
    public deleteProduct(@Param('product_id') params) {
        this.productService.deleteProduct(params);
    }

}