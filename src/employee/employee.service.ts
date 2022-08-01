import { Injectable } from "@nestjs/common";
import { Employee, officeEnum, situationEnum } from "./employee.models";

@Injectable()
export class EmployeeService {

    private employees: Array<Employee> = [ 
        { employee_id: 'a99e8bf7-fa32-4ae7-8b53-5e00b9d43621', employee_name: 'maria da silva', cpf: 12312312312, office: officeEnum.gerente, situation: situationEnum.activate},
        { employee_id: 'a99e8bf7-fa32-4ae7-8b53-5e00b9d43622', employee_name: 'joão da silva', cpf: 12312312312, office: officeEnum.gerente, situation: situationEnum.deactivate}
    ];

    public createEmployee(employee: Employee): Employee {
        this.employees.push(employee);
        return employee;
    }

    public readAllEmployees(): Employee[] { 
        return this.employees;
    }

    public readOneEmployee(params): Employee {
        let index = this.employees.findIndex(employee => employee.employee_name == params || employee.employee_id == params || employee.cpf == params || employee.office == params || employee.situation == params );
        return this.employees[index];
    }

    public readOneById(params) {
        return this.employees.findIndex(employee => employee.employee_id == params)
    }

    public updateEmployee(params, employee): Employee {
        let index = this.readOneById(params);
        this.employees[index].employee_name = employee.employee_name;
        this.employees[index].cpf = employee.cpf;
        this.employees[index].office = employee.office;
        this.employees[index].situation = employee.situation;
        return this.employees[index];
    }

    public deleteEmployee(params) {
        const index = this.readOneById(params);
        this.employees.splice(index, 1);
    }

    
}