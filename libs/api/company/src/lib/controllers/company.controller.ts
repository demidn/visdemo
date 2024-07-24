import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CompanyDto } from './company.dto';
import { SaveOrUpdateCompanyUsecase } from '../usecases/save-or-update-company.usecase';
import { GetCompaniesUsecase } from '../usecases/get-companies.usecase';
import { CompanyPresenter } from './company.presenter';
import { getSchemaPath, ApiOkResponse, ApiTags, ApiExtraModels, ApiOperation } from '@nestjs/swagger';

@Controller('company')
@ApiTags('company')
@ApiExtraModels(CompanyPresenter)
export class CompanyController {
  constructor(private saveOrUpdateCompanyUsecase: SaveOrUpdateCompanyUsecase, private getCompaniesUsecase: GetCompaniesUsecase) {}

  @Get('/')
  @ApiOperation({ operationId: 'getCompanies' })
  @ApiOkResponse({
    isArray: true,
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(CompanyPresenter),
      },
    },
  })
  async getCompanies(): Promise<CompanyPresenter[]> {
    const companies = await this.getCompaniesUsecase.execute();
    return companies.map((c) => new CompanyPresenter(c));
  }

  @EventPattern(`CompanyStatsQueue:Initial`)
  saveInitialCompanies(@Payload() data: CompanyDto[]) {
    this.saveOrUpdateCompanyUsecase.execute(data).catch(e => console.error(e));
  }
  @EventPattern(`CompanyStatsQueue:Update`)
  updateCompany(@Payload() data: CompanyDto[]) {
    this.saveOrUpdateCompanyUsecase.execute(data).catch(e => console.error(e));
  }
}
