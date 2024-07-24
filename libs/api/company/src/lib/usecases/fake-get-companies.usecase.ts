import { Company } from '../models/company';
import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

export const COMPANIES: Company[] = [
  { id: crypto.randomUUID(), name: 'WB', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'OZON', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'DNS', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'Apple', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'Microsoft', sales: 1000, averageSalary: 500 },
];

@Injectable()
export class FakeGetCompaniesUsecase {
  async execute(): Promise<Company[]> {
    return COMPANIES.map(company => ({
      ...company,
      sales: faker.number.int({min: 100, max: 1000}),
      averageSalary: faker.number.int({min: 100, max: 1000})
    }))
  }
}
