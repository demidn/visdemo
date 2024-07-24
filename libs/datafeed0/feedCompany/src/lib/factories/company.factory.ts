import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';
import { Company } from '../models/Company';

export const COMPANIES: Company[] = [
  { id: crypto.randomUUID(), name: 'WB', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'OZON', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'DNS', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'Apple', sales: 1000, averageSalary: 500 },
  { id: crypto.randomUUID(), name: 'Microsoft', sales: 1000, averageSalary: 500 },
]

export const companyFactory = Factory.Sync.makeFactory<Omit<Company, 'name'>>({
  id: Factory.each(() => faker.helpers.arrayElement(COMPANIES).id),
  sales: Factory.each(() => faker.number.int({min: 100, max: 1000})),
  averageSalary: Factory.each(() => faker.number.int({min: 100, max: 1000}))
});
