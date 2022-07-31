import { Injectable, Param } from "@nestjs/common";
import { Employee, officeEnum, situationEnum } from "./employee.models";

@Injectable()
export class EmployeeService {

    private employees: Array<Employee> = [ { employee_id: 'a99e8bf7-fa32-4ae7-8b53-5e00b9d43621', employee_name: 'maria da silva', cpf: 12312312312, office: officeEnum.gerente, situation: situationEnum.activate},
    { employee_id: 'a99e8bf7-fa32-4ae7-8b53-5e00b9d43622', employee_name: 'joão da silva', cpf: 12312312312, office: officeEnum.gerente, situation: situationEnum.deactivate}];

    public createEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    public readAllEmployees(): Employee[] { 
        return this.employees;
    }

    public updateEmployee() {

    }

    public deleteEmployee(employee_id: string) {
        this.employees.pop();
    }
}