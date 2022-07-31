import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Employee } from "./employee.models";
import { EmployeeService } from "./employee.service";

@Controller('api/v1/employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {}

    @Post()
    public createEmployee(@Body() employee: Employee): string {
        this.employeeService.createEmployee(employee);
        return 'Funcionário cadastrado';
    }

    @Get()
    public readAllEmployees(): Employee[] {
        return this.employeeService.readAllEmployees();
    }

    @Put(':employee_id')
    public updateEmployee(@Body() employee: Employee): Employee {
        return employee;
    }

    @Delete(':employee_id')
    public deleteEmployee(@Param() params) {
        this.employeeService.deleteEmployee(params.employee_id);
    }
}