import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Employee } from "./employee.models";
import { EmployeeService } from "./employee.service";

@Controller('api/v1/employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {}

    @Post()
    public createEmployee(@Body() employee: Employee): Employee {
        return this.employeeService.createEmployee(employee);
    }

    @Get()
    public readAllEmployees(): Employee[] {
        return this.employeeService.readAllEmployees();
    }

    @Get(':employee_name' || ':cpf' || ':office' || ':situation' )
    public readOneEmployee(@Param('employee_name' || 'cpf' || 'office' || 'situation') params): Employee {
        return this.employeeService.readOneEmployee(params);
    }

    @Put(':employee_id')
    public updateEmployee(@Param('employee_id') params, @Body() employee: Employee): Employee {
        return this.employeeService.updateEmployee(params, employee);
    }

    @Delete(':employee_id')
    public deleteEmployee(@Param('employee_id') params) {
        this.employeeService.deleteEmployee(params);
    }

}