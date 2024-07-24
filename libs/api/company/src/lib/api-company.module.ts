import { Module } from '@nestjs/common';
import { CompanyModule } from './company.module';

@Module({
  imports: [CompanyModule.register()],
})
export class ApiCompanyModule {}
