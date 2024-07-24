import { DynamicModule } from '@nestjs/common';
import { ApiConfigModule } from '@xemida/api-config';
import { CompanyEntity } from './entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetCompaniesUsecase } from './usecases/get-companies.usecase';
import { FakeGetCompaniesUsecase } from './usecases/fake-get-companies.usecase';
import { SaveOrUpdateCompanyUsecase } from './usecases/save-or-update-company.usecase';
import { CompanyRepository } from './repositories/company.repository';
import { CompanyController } from './controllers/company.controller';

export class CompanyModule {
  static register(): DynamicModule {
    const onlyFakeApi = process.env['ONLY_FAKE_API'] === 'true';

    const imports = onlyFakeApi ? [ApiConfigModule] : [TypeOrmModule.forFeature([CompanyEntity]), ApiConfigModule];
    const providers = onlyFakeApi
      ? [
          { provide: GetCompaniesUsecase, useClass: FakeGetCompaniesUsecase },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          { provide: SaveOrUpdateCompanyUsecase, useFactory: () => {} },
        ]
      : [GetCompaniesUsecase, SaveOrUpdateCompanyUsecase, CompanyRepository];

    return {
      module: CompanyModule,
      imports,
      controllers: [CompanyController],
      providers,
      exports: [],
    };
  }
}
