import { ApiProperty } from '@nestjs/swagger';
import { Company } from '../models/company';

export class CompanyPresenter {
  @ApiProperty({required: true})
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  sales: number;

  @ApiProperty()
  averageSalary: number;

  constructor(company: Company) {
    this.id = company.id!;
    this.name = company.name;
    this.sales = company.sales;
    this.averageSalary = company.averageSalary;
  }
}
