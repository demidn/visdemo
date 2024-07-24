import { CompanyRepository } from '../repositories/company.repository';
import { Company } from '../models/company';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetCompaniesUsecase {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(): Promise<Company[]> {
    console.log('GetCompaniesUsecase.execute');
    return this.companyRepository.getCompanies();
  }
}
