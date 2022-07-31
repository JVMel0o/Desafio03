export const enum officeEnum { gerente = 'gerente', vendedor = 'vendedor', caixa = 'caixa' }
export const enum situationEnum {activate = 'activate', deactivate = 'deactivate'}

export class Employee {
    
    employee_id: string;
    employee_name: string;
    cpf: number;
    office: officeEnum;
    //birthday: Date;
    situation: situationEnum;

    constructor(employee_id: string, employee_name: string, cpf: number, office: officeEnum, /*birthday: Date,*/ situation: situationEnum) {
        this.employee_id = employee_id;
        this.employee_name = employee_name;
        this.cpf = cpf;
        this.office = office;
        //this.birthday = birthday;
        this.situation = situation;
    }
}