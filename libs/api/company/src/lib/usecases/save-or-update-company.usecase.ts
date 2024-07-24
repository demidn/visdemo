import { CompanyRepository } from '../repositories/company.repository';
import { Company } from '../models/company';
import { Injectable } from '@nestjs/common';

interface SaveOrUpdateCompanyPayload {
  id: string | undefined;
  name: string;
  sales: number;
  averageSalary: number;
}

@Injectable()
export class SaveOrUpdateCompanyUsecase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(payload: SaveOrUpdateCompanyPayload[] | SaveOrUpdateCompanyPayload): Promise<void> {
    const companies = Array.isArray(payload) ? payload : [payload];
    const models = companies.map(({ id, name, sales, averageSalary }) => {
      const company = new Company(id, name);
      company.sales = sales;
      company.averageSalary = averageSalary;
      return company
    });

    this.companyRepository.saveOrUpdateCompany(models);
  }
}
