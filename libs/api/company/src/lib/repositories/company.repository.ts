import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../models/company';
import { CompanyEntity } from '../entities/company.entity';


@Injectable()
export class CompanyRepository {
  constructor(@InjectRepository(CompanyEntity) private companyRepository: Repository<CompanyEntity>) {}

  async getCompanies() {
    return this.companyRepository.find().then((companies) => companies.map(this.toModel));
  }

  async saveOrUpdateCompany(company: Company[] | Company) {
    const companies = Array.isArray(company) ? company : [company];
    return this.companyRepository.save(companies.map(this.fromModel));
  }

  toModel(entity: CompanyEntity): Company {
    const company = new Company(entity.id, entity.name);

    company.sales = entity.sales;
    company.averageSalary = entity.averageSalary;

    return company;
  }

  fromModel(model: Company): CompanyEntity {
    const entity = new CompanyEntity(model.id, model.name);

    entity.sales = model.sales;
    entity.averageSalary = model.averageSalary;

    return entity;
  }
}
